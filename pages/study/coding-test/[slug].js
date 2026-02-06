import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/layout';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function PostDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetchPost();
    fetch('/api/admin/check')
      .then(res => res.json())
      .then(data => setIsAdmin(data.isAdmin));
  }, [slug]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/posts/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setPost(data);
      } else {
        router.push('/study/coding-test');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const res = await fetch(`/api/posts/${slug}`, { method: 'DELETE' });
      if (res.ok) {
        router.push('/study/coding-test');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center text-slate-600 dark:text-slate-400">
          로딩 중...
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center text-slate-600 dark:text-slate-400">
          게시글을 찾을 수 없습니다.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{post.title} - 코딩 개발발 공부 - 센텀준호</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/study/coding-test"
            className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            ← 목록으로
          </Link>
        </div>

        <article className="rounded-lg border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
          <header className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
            <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-cyan-100 px-3 py-1 dark:bg-cyan-900/30">
                {post.platform}
              </span>
              {post.problemNo && (
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700">
                  문제 #{post.problemNo}
                </span>
              )}
              {post.difficulty && (
                <span className="rounded-full bg-indigo-100 px-3 py-1 dark:bg-indigo-900/30">
                  {post.difficulty}
                </span>
              )}
              {post.tags.map((tag, i) => (
                <span key={i} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700">
                  {tag}
                </span>
              ))}
              <span className="ml-auto text-slate-500 dark:text-slate-400">
                {new Date(post.createdAt).toLocaleDateString('ko-KR')}
              </span>
            </div>
            {isAdmin && (
              <div className="mt-4 flex gap-2">
                <Link
                  href={`/study/coding-test/${post.slug}/edit`}
                  className="rounded bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
                >
                  수정
                </Link>
                <button
                  onClick={handleDelete}
                  className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  삭제
                </button>
              </div>
            )}
          </header>

          {post.summary && (
            <div className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-900/50">
              <h2 className="mb-2 font-semibold text-slate-900 dark:text-white">요약</h2>
              <p className="whitespace-pre-wrap text-slate-700 dark:text-slate-300">{post.summary}</p>
            </div>
          )}

          <div className="prose prose-slate max-w-none whitespace-pre-wrap dark:prose-invert">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">풀이</h2>
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.contentMarkdown}
            </ReactMarkdown>
          </div>

          {post.codeBlock && (
            <div className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">코드</h2>
              <SyntaxHighlighter
                style={vscDarkPlus}
                language="javascript"
                PreTag="div"
                className="rounded-lg"
              >
                {post.codeBlock}
              </SyntaxHighlighter>
            </div>
          )}

          {post.retrospective && (
            <div className="mt-8 rounded-lg bg-slate-50 p-6 dark:bg-slate-900/50">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">회고</h2>
              <div className="prose prose-slate max-w-none whitespace-pre-wrap dark:prose-invert">
                <ReactMarkdown>{post.retrospective}</ReactMarkdown>
              </div>
            </div>
          )}
        </article>
      </div>
    </Layout>
  );
}
