import Link from "next/link";
// import Anime from "../home/anime"; // 필요 없으면 주석 유지

export default function BlogDetails() {
  const blogPosts = [
    { id: 1, title: "BLENDER : PYTHON 블랜더 파이썬으로 코딩하여 플러그인 개발하기 no.1", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/blender-python-%EB%B8%94%EB%9E%9C%EB%8D%94-%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%EC%BD%94%EB%94%A9%ED%95%98%EC%97%AC-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0-no1", date: "2023-06-01", author: "이준호", views: 100 },
    { id: 2, title: "CVAT 오픈소스 구축 방법 정확하게 알려드립니다 feat . Docker, Git 세팅", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/CVAT-%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%ED%99%9C%EC%9A%A9-Docker-Git-%EC%82%AC%EC%9A%A9-%EB%B2%95", date: "2023-06-02", author: "이준호", views: 15 },
    { id: 3, title: "EXCEL에서 CODE 128 폰트로 읽을 수 있는 바코드 만들기 렛츠 고우", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/EXCEL에서-CODE-128-폰트로-읽을-수-있는-바코드-만들기", date: "2022-01-03", author: "이준호", views: 40 },
    { id: 4, title: "Uncaught (in promise) TypeError: Failed to fetch 이런 실수 내가 합니다.", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/Uncaught-in-promise-TypeError-Failed-to-fetch", date: "2023-09-20", author: "이준호", views: 35 },
    { id: 5, title: "Nest.js 는 Node.js 의 프레임워크 오케이 ?  RestAPI 만들어 보자", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/Nestjs-%EB%8A%94-Nodejs-%EC%9D%98-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EC%98%A4%EC%BC%80%EC%9D%B4-RestAPI-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EC%9E%90", date: "2024-04-19", author: "이준호", views: 80 },
  ];

  const RnDPosts = [
    { id: 1, title: "전기차 충전 인프라 사업의 미래 전망과 주요 Key Player들을 알아보자", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%EC%9D%B8%ED%94%84%EB%9D%BC-%EC%82%AC%EC%97%85%EC%9D%98-%EB%AF%B8%EB%9E%98-%EC%A0%84%EB%A7%9D%EA%B3%BC-%EC%A3%BC%EC%9A%94-Key-Player%EB%93%A4%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90", date: "2023-09-07", author: "이준호", views: 100 },
    { id: 2, title: "전기차 충전 플랫폼 사업을 시작하기 위해 전기차 충전 플랫폼 수익 구조를 알아보자 (소프트베리 , 플러그링크)", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EC%82%AC%EC%97%85%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EC%88%98%EC%9D%B5-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-%EC%86%8C%ED%94%84%ED%8A%B8%EB%B2%A0%EB%A6%AC-%ED%94%8C%EB%9F%AC%EA%B7%B8%EB%A7%81%ED%81%AC", date: "2023-09-07", author: "이준호", views: 15 },
    { id: 3, title: "[JAVA]대한민국 법정동 코드 reg-code-api  조회 API 사용방법 알려드리오", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/JAVA%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%B2%95%EC%A0%95%EB%8F%99-%EC%BD%94%EB%93%9C-reg-code-api-%EC%A1%B0%ED%9A%8C-API-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-%EC%95%8C%EB%A0%A4%EB%93%9C%EB%A6%AC%EC%98%A4", date: "2023-11-04", author: "이준호", views: 40 },
    { id: 4, title: "지도 api (네이버,카카오) + 공공데이터 활용 앱 개발 Test 영상", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%A7%80%EB%8F%84-api-%EB%84%A4%EC%9D%B4%EB%B2%84%EC%B9%B4%EC%B9%B4%EC%98%A4-%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%9C%EC%9A%A9-%EC%95%B1-%EA%B0%9C%EB%B0%9C-Test-%EC%98%81%EC%83%81", date: "2023-10-20", author: "이준호", views: 35 },
    { id: 5, title: "웹 컴포넌트의 새로운 세계: 웹 개발의 패러다임 변화", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%88%EC%9A%B4%ED%8A%B8%EC%9D%98-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%84%B8%EA%B3%84-%EC%9B%B9-%EA%B0%9C%EB%B0%9C%EC%9D%98-%ED%8C%A8%EB%9F%AC%EB%8B%A4%EC%9E%84-%EB%B3%80%ED%99%94", date: "2023-09-08", author: "이준호", views: 80 },
    { id: 6, title: "F1-Score에 대하여 [ 정분류율, 오분류율 , 민감도, 재현율, 특이도, 정확도, F1-Score]", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/F1-Score%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC-%EC%A0%95%EB%B6%84%EB%A5%98%EC%9C%A8-%EC%98%A4%EB%B6%84%EB%A5%98%EC%9C%A8-%EB%AF%BC%EA%B0%90%EB%8F%84-%EC%9E%AC%ED%98%84%EC%9C%A8-%ED%8A%B9%EC%9D%B4%EB%8F%84-%EC%A0%95%ED%99%95%EB%8F%84-F1-Score", date: "2024-04-18", author: "이준호", views: 80 },
  ];

  return (
    <section className="relative">
      {/* 배경: 라이트/다크 공통 그리드/그라데이션 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cyan-50 via-indigo-50 to-transparent dark:bg-[radial-gradient(110%_60%_at_50%_-10%,rgba(56,189,248,.25),rgba(99,102,241,.15)_35%,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,.7),rgba(0,0,0,.2),transparent)]"
      />

      <div className="container mx-auto px-6 py-12">
        {/* 헤더 */}
        <header className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hot Contents
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
              최근 조회/관심 많은 글들을 모았어요.
            </p>
          </div>
          <Link
            href="https://smart-factory-lee-joon-ho.tistory.com"
            className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90 md:inline-flex"
          >
            센텀준호 블로그 이동 ↗
          </Link>
        </header>

        {/* Hot Contents 그리드 */}
        <CardGrid posts={blogPosts} />

        {/* 구분선 */}
        <div className="my-10 h-px bg-slate-200 dark:bg-white/10" />

        {/* R&D Report 섹션 */}
        <header className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            R&amp;D Report
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
            리서치/분석/개발 기록을 카드로 요약했습니다.
          </p>
        </header>

        <CardGrid posts={RnDPosts} />

        {/* 모바일 하단 CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="https://smart-factory-lee-joon-ho.tistory.com"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90"
          >
            센텀준호 블로그 이동 ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function CardGrid({ posts }) {
  // 조회수 높은 순으로 정렬(원본 배열 영향 X)
  const items = [...posts].sort((a, b) => b.views - a.views);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((post) => (
        <ArticleCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function ArticleCard({ post }) {
  return (
    <Link
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="
        group block h-full
        rounded-2xl border border-slate-200 bg-white p-5
        shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
        dark:border-white/10 dark:bg-white/5
      "
    >
      {/* 상단 배지들 */}
      <div className="mb-3 flex items-center gap-2">
        <Badge>{post.author}</Badge>
        <Badge tone="muted">{post.date}</Badge>
        <Badge tone="primary">조회수 {post.views}</Badge>
        <span
          aria-hidden
          className="ml-auto text-[10px] text-slate-500 transition group-hover:text-slate-700 dark:text-white/50 dark:group-hover:text-white/70"
        >
          외부링크 ↗
        </span>
      </div>

      {/* 제목 */}
      <h3
        className="
          line-clamp-2 text-lg font-semibold leading-snug
          text-slate-900 transition group-hover:text-slate-700
          dark:text-white dark:group-hover:text-white/90
        "
      >
        {post.title}
      </h3>

      {/* 하단 그라데이션 바 */}
      <div
        aria-hidden
        className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-24"
      />
    </Link>
  );
}

function Badge({ children, tone = "default" }) {
  const tones = {
    default:
      "border-slate-300 bg-white text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80",
    primary:
      "border-cyan-300/60 bg-cyan-50 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300",
    muted:
      "border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70",
  }[tone];

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${tones}`}>
      {children}
    </span>
  );
}
