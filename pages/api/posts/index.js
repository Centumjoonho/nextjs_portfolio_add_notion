import { prisma } from '../../../lib/prisma';
import { isAdmin, isAdminRole } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { search, platform, difficulty, page = '1', limit = '10' } = req.query;
      const pageNum = parseInt(page, 10);
      const limitNum = parseInt(limit, 10);
      const skip = (pageNum - 1) * limitNum;

      const admin = isAdmin(req);

      // 필터 조건 구성
      const where = {
        ...(admin ? {} : { isPublic: true }), // 관리자가 아니면 공개 글만
        ...(platform && { platform }),
        ...(difficulty && { difficulty }),
        ...(search && {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { tags: { has: search } },
            { platform: { contains: search, mode: 'insensitive' } },
          ],
        }),
      };

      const [posts, total] = await Promise.all([
        prisma.post.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          skip,
          take: limitNum,
        }),
        prisma.post.count({ where }),
      ]);

      return res.status(200).json({
        posts,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total,
          totalPages: Math.ceil(total / limitNum),
        },
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      return res.status(500).json({ error: 'Failed to fetch posts' });
    }
  }

  if (req.method === 'POST') {
    // 작성은 ADMIN만 (DEMO는 불가)
    if (!isAdminRole(req)) {
      return res.status(403).json({ error: 'Forbidden: Demo accounts cannot create posts' });
    }

    try {
      const {
        title,
        platform,
        problemNo,
        difficulty,
        tags,
        summary,
        contentMarkdown,
        codeBlock,
        retrospective,
        isPublic = true,
      } = req.body;

      if (!title || !platform || !contentMarkdown) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // slug 생성 (제목 기반)
      let slug = title
        .toLowerCase()
        .replace(/[^a-z0-9가-힣]+/g, '-')
        .replace(/^-+|-+$/g, '');

      // 중복 체크 및 suffix 추가
      let finalSlug = slug;
      let counter = 1;
      while (await prisma.post.findUnique({ where: { slug: finalSlug } })) {
        finalSlug = `${slug}-${counter}`;
        counter++;
      }

      const tagsArray = Array.isArray(tags) ? tags : tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];

      const post = await prisma.post.create({
        data: {
          title,
          slug: finalSlug,
          platform,
          problemNo: problemNo || null,
          difficulty: difficulty || null,
          tags: tagsArray,
          summary: summary || null,
          contentMarkdown,
          codeBlock: codeBlock || null,
          retrospective: retrospective || null,
          isPublic: isPublic !== false,
        },
      });

      return res.status(201).json(post);
    } catch (error) {
      console.error('Error creating post:', error);
      return res.status(500).json({ error: 'Failed to create post' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
