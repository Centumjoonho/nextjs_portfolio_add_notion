// components/layout/header.js (or ./header.js)
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DMTBtn from "./dark-m-t-btn";

const NAV_ITEMS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "STUDY" },
  { href: "/study/coding-test", label: "CODING" },
  { href: "/blog", label: "기술블로그" },
  { href: "https://ai-crypto-gwv3.vercel.app/", label: "AI CRYPTO", external: true },
  { href: "https://anycable-theta.vercel.app/", label: "PRIVATE CHAT", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // 라우트 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  // 로그인 상태 확인
  useEffect(() => {
    fetch('/api/admin/check')
      .then(res => res.json())
      .then(data => setIsAdmin(data.isAdmin))
      .catch(() => setIsAdmin(false));
  }, [router.pathname]);

  // 현재 경로와 일치하면 활성 스타일
  const isActive = (href) => {
    // 외부 링크는 활성 처리 없음
    if (href.startsWith("http")) return false;
    // 정확 일치 또는 하위 경로 일치
    return router.pathname === href || router.pathname.startsWith(href + "/");
  };

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-slate-200/60 bg-white/70 backdrop-blur-md
        dark:border-slate-700/60 dark:bg-slate-900/60
      "
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-2">
          <div
            className="
              inline-flex h-9 w-9 items-center justify-center rounded-xl
              bg-gradient-to-br from-cyan-500 to-indigo-500 text-white font-bold
              shadow-sm group-hover:opacity-90
            "
            aria-hidden
          >
            CJ
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Centum 준호
          </span>
          <span className="ml-1 rounded-full border border-slate-300 bg-white/70 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
            DX
          </span>
        </Link>

        {/* Right side (desktop) */}
        <div className="hidden items-center gap-1 lg:flex">
          <nav aria-label="Primary" className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} active={isActive(item.href)} />
            ))}
          </nav>
          <div className="ml-2 flex items-center gap-2 pl-2">
            {isAdmin ? (
              <>
                <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
                  관리자
                </span>
                <button
                  onClick={async () => {
                    await fetch('/api/admin/logout', { method: 'POST' });
                    setIsAdmin(false);
                    router.push('/');
                  }}
                  className="rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <Link
                href="/admin/login"
                className="rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                로그인
              </Link>
            )}
            <DMTBtn />
          </div>
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center gap-2 lg:hidden">
          {isAdmin ? (
            <button
              onClick={async () => {
                await fetch('/api/admin/logout', { method: 'POST' });
                setIsAdmin(false);
                router.push('/');
              }}
              className="rounded-lg px-2 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              로그아웃
            </button>
          ) : (
            <Link
              href="/admin/login"
              className="rounded-lg px-2 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              로그인
            </Link>
          )}
          <DMTBtn />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label="메인 메뉴 열기/닫기"
            className="
              inline-flex h-10 w-10 items-center justify-center rounded-lg
              ring-1 ring-slate-300 hover:bg-slate-100
              dark:ring-slate-600 dark:hover:bg-slate-800
              focus:outline-none focus:ring-2 focus:ring-cyan-500
            "
          >
            {/* 햄버거/닫기 아이콘 */}
            <svg
              className={`h-5 w-5 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              className={`h-5 w-5 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`
          lg:hidden
          overflow-hidden transition-[max-height,opacity] duration-300 ease-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav
          aria-label="Mobile Primary"
          className="container mx-auto flex flex-col gap-1 px-4 pb-4 pt-1"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} active={isActive(item.href)} mobile />
          ))}
          {isAdmin && (
            <div className="mt-2 rounded-lg bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              관리자 모드
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label, external, active, mobile }) {
  const base =
    "relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold transition";
  const color =
    "text-slate-700 hover:text-slate-900 hover:bg-slate-100 " +
    "dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10";
  const activeCls =
    active
      ? "text-slate-900 dark:text-white"
      : "";

  // 활성 탭 밑줄 그라데이션
  const underline = active ? (
    <span
      aria-hidden
      className="
        pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full
        bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500
      "
    />
  ) : null;

  const props = external
    ? { href, target: "_blank", rel: "noreferrer" }
    : { href };

  return (
    <Link
      {...props}
      className={[
        base,
        color,
        activeCls,
        mobile ? "justify-between ring-1 ring-slate-200/70 dark:ring-slate-700/60" : "",
      ].join(" ")}
    >
      <span>{label}</span>
      {underline}
      {external && (
        <span className="ml-2 text-[10px] text-slate-500 dark:text-white/50" aria-hidden>
          ↗
        </span>
      )}
    </Link>
  );
}
