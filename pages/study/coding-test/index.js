import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/layout';
import Head from 'next/head';

export default function CodingTestList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [search, setSearch] = useState('');
  const [platform, setPlatform] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const router = useRouter();

  const platforms = ['BOJ', 'Programmers', 'LeetCode', 'HackerRank', 'Codeforces', '기타'];
  const difficulties = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Lv1', 'Lv2', 'Lv3', 'Lv4', 'Lv5', 'Easy', 'Medium', 'Hard'];

  useEffect(() => {
    // 관리자 확인
    fetch('/api/admin/check')
      .then(res => res.json())
      .then(data => setIsAdmin(data.isAdmin));
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [page, search, platform, difficulty]);

  const fetchPosts = async () => {
    setLoading(true);
    const params = new URLSearchParams({
      page: page.toString(),
      limit: '10',
      ...(search && { search }),
      ...(platform && { platform }),
      ...(difficulty && { difficulty }),
    });

    try {
      const res = await fetch(`/api/posts?${params}`);
      const data = await res.json();
      setPosts(data.posts || []);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchPosts();
  };

  const handleDelete = async (slug) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const res = await fetch(`/api/posts/${slug}`, { method: 'DELETE' });
      if (res.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>코딩 개발 공부 - 센텀준호</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            코딩 개발 공부
          </h1>
          {isAdmin && (
            <Link
              href="/study/coding-test/new"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 font-semibold text-white transition hover:opacity-90"
            >
              새 글 작성
            </Link>
          )}
        </div>

        {/* 검색/필터 */}
        <form onSubmit={handleSearch} className="mb-6 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <input
              type="text"
              placeholder="제목, 태그, 플랫폼 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            >
              <option value="">전체 플랫폼</option>
              {platforms.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            >
              <option value="">전체 난이도</option>
              {difficulties.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white transition hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500"
            >
              검색
            </button>
          </div>
        </form>

        {/* 목록 */}
        {loading ? (
          <div className="text-center py-12 text-slate-600 dark:text-slate-400">로딩 중...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 text-slate-600 dark:text-slate-400">게시글이 없습니다.</div>
        ) : (
          <>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg border border-slate-200 bg-white p-6 transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="flex items-start justify-between">
                    <Link href={`/study/coding-test/${post.slug}`} className="flex-1">
                      <h2 className="mb-2 text-xl font-bold text-slate-900 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400">
                        {post.title}
                      </h2>
                      <div className="mb-2 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="rounded-full bg-cyan-100 px-2 py-1 dark:bg-cyan-900/30">
                          {post.platform}
                        </span>
                        {post.problemNo && (
                          <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-700">
                            #{post.problemNo}
                          </span>
                        )}
                        {post.difficulty && (
                          <span className="rounded-full bg-indigo-100 px-2 py-1 dark:bg-indigo-900/30">
                            {post.difficulty}
                          </span>
                        )}
                        {post.tags.map((tag, i) => (
                          <span key={i} className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {post.summary && (
                        <p className="mb-2 text-slate-600 dark:text-slate-400">{post.summary}</p>
                      )}
                      <p className="text-xs text-slate-500 dark:text-slate-500">
                        {new Date(post.createdAt).toLocaleDateString('ko-KR')}
                      </p>
                    </Link>
                    {isAdmin && (
                      <div className="ml-4 flex gap-2">
                        <Link
                          href={`/study/coding-test/${post.slug}/edit`}
                          className="rounded px-2 py-1 text-sm text-cyan-600 hover:bg-cyan-50 dark:text-cyan-400 dark:hover:bg-cyan-900/20"
                        >
                          수정
                        </Link>
                        <button
                          onClick={() => handleDelete(post.slug)}
                          className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                        >
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            {pagination && pagination.totalPages > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50 dark:text-slate-300"
                >
                  이전
                </button>
                <span className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">
                  {page} / {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
                  disabled={page === pagination.totalPages}
                  className="rounded px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50 dark:text-slate-300"
                >
                  다음
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
