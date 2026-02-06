import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import Head from 'next/head';

export default function NewPost() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    platform: 'BOJ',
    problemNo: '',
    difficulty: '',
    tags: '',
    summary: '',
    contentMarkdown: '',
    codeBlock: '',
    retrospective: '',
    isPublic: true,
  });

  useEffect(() => {
    fetch('/api/admin/check')
      .then(res => res.json())
      .then(data => {
        if (!data.isAdmin) {
          // 현재 경로를 next 파라미터로 전달
          router.push(`/admin/login?next=${encodeURIComponent(router.asPath)}`);
        } else {
          setIsAdmin(true);
        }
      });
  }, [router]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const post = await res.json();
        router.push(`/study/coding-test/${post.slug}`);
      } else {
        const error = await res.json();
        alert(error.error || '작성 실패');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('작성 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center text-slate-600 dark:text-slate-400">
          로딩 중...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>새 글 작성 - 코딩 개발발 공부 - 센텀준호</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">새 글 작성</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              제목 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                플랫폼 <span className="text-red-500">*</span>
              </label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              >
                <option value="BOJ">BOJ</option>
                <option value="Programmers">Programmers</option>
                <option value="LeetCode">LeetCode</option>
                <option value="HackerRank">HackerRank</option>
                <option value="Codeforces">Codeforces</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                문제 번호
              </label>
              <input
                type="text"
                name="problemNo"
                value={formData.problemNo}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              난이도
            </label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            >
              <option value="">선택 안 함</option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Lv1">Lv1</option>
              <option value="Lv2">Lv2</option>
              <option value="Lv3">Lv3</option>
              <option value="Lv4">Lv4</option>
              <option value="Lv5">Lv5</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              태그 (쉼표로 구분)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="예: DP, 그래프, 구현"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              요약
            </label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="2"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              풀이 (마크다운) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="contentMarkdown"
              value={formData.contentMarkdown}
              onChange={handleChange}
              required
              rows="15"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 font-mono text-sm text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              placeholder="마크다운 형식으로 작성하세요..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              코드
            </label>
            <textarea
              name="codeBlock"
              value={formData.codeBlock}
              onChange={handleChange}
              rows="10"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 font-mono text-sm text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              placeholder="코드를 입력하세요..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              회고
            </label>
            <textarea
              name="retrospective"
              value={formData.retrospective}
              onChange={handleChange}
              rows="5"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              placeholder="회고를 작성하세요..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="isPublic"
              checked={formData.isPublic}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
            />
            <label className="ml-2 text-sm text-slate-700 dark:text-slate-300">
              공개
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-2 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? '작성 중...' : '작성'}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-lg border border-slate-300 bg-white px-6 py-2 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
