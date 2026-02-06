import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Head from 'next/head';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { next } = router.query;

  useEffect(() => {
    // 이미 로그인되어 있는지 확인
    fetch('/api/admin/check')
      .then(res => res.json())
      .then(data => {
        if (data.isAdmin) {
          // next 파라미터가 있으면 그곳으로, 없으면 기본 경로로
          router.push(next || '/study/coding-test');
        }
      });
  }, [router, next]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // 로그인 성공 시 next 파라미터가 있으면 그곳으로, 없으면 기본 경로로
        router.push(next || '/study/coding-test');
      } else {
        setError(data.error || '로그인에 실패했습니다.');
      }
    } catch (err) {
      setError('오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>관리자 로그인 - 센텀준호</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h1 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              관리자 로그인
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  아이디
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-cyan-400"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-cyan-400"
                  required
                />
              </div>
              {error && (
                <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? '로그인 중...' : '로그인'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
