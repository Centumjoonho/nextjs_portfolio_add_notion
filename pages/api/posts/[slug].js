import { prisma } from '../../../lib/prisma';
import { isAdmin, isAdminRole } from '../../../lib/auth';

export default async function handler(req, res) {
  const { slug } = req.query;
  const admin = isAdmin(req);

  if (req.method === 'GET') {
    try {
      const post = await prisma.post.findUnique({
        where: { slug },
      });

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // 관리자가 아니고 비공개 글이라면 접근 불가
      if (!admin && !post.isPublic) {
        return res.status(404).json({ error: 'Post not found' });
      }

      return res.status(200).json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      return res.status(500).json({ error: 'Failed to fetch post' });
    }
  }

  if (req.method === 'PUT') {
    // 수정은 ADMIN만 (DEMO는 불가)
    if (!isAdminRole(req)) {
      return res.status(403).json({ error: 'Forbidden: Demo accounts cannot edit posts' });
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
        isPublic,
      } = req.body;

      if (!title || !platform || !contentMarkdown) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const tagsArray = Array.isArray(tags) ? tags : tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];

      const post = await prisma.post.update({
        where: { slug },
        data: {
          title,
          platform,
          problemNo: problemNo || null,
          difficulty: difficulty || null,
          tags: tagsArray,
          summary: summary || null,
          contentMarkdown,
          codeBlock: codeBlock || null,
          retrospective: retrospective || null,
          ...(isPublic !== undefined && { isPublic }),
        },
      });

      return res.status(200).json(post);
    } catch (error) {
      console.error('Error updating post:', error);
      return res.status(500).json({ error: 'Failed to update post' });
    }
  }

  if (req.method === 'DELETE') {
    // 삭제는 ADMIN만 (DEMO는 불가)
    if (!isAdminRole(req)) {
      return res.status(403).json({ error: 'Forbidden: Demo accounts cannot delete posts' });
    }

    try {
      await prisma.post.delete({
        where: { slug },
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error deleting post:', error);
      return res.status(500).json({ error: 'Failed to delete post' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
