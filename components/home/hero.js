import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Github, ChevronRight, Cpu, Sparkles, BookOpen } from "lucide-react";
import dynamic from "next/dynamic";

const Anime = dynamic(() => import("../home/anime"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ==== Background (Light/Dark 각각 별도) ==== */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-b from-cyan-50 via-indigo-50 to-transparent
          dark:bg-[radial-gradient(110%_60%_at_50%_-10%,rgba(56,189,248,.25),rgba(99,102,241,.15)_35%,transparent)]
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)]
          bg-[size:32px_32px]
          dark:bg-grid-slate-800/20
          [mask-image:linear-gradient(to_bottom,rgba(0,0,0,.7),rgba(0,0,0,.2),transparent)]
        "
      />

      <div className="container mx-auto flex flex-col items-center px-6 py-20 md:flex-row md:py-28">
        {/* === Left: Copy === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 md:pr-16"
        >
          <div
            className="
              inline-flex items-center gap-2 rounded-full
              border border-slate-300 bg-white/70 text-slate-700
              dark:border-white/10 dark:bg-white/5 dark:text-white/80
              px-3 py-1 text-xs shadow-sm backdrop-blur
            "
          >
            <Sparkles size={14} />
            <span>Device eXperience · Backend & Data Pipeline</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            이준호 <span className="text-cyan-600 dark:text-cyan-300">/ Joonho Lee</span>
          </h1>
          <p className="mt-2 text-xl text-slate-700 dark:text-white/70">
            IT Specialist · DX Software Engineer
          </p>

          <ul className="mt-6 space-y-2 text-base text-slate-700 dark:text-white/80">
            <li className="flex items-start gap-2">
              <Cpu className="mt-1 h-5 w-5 text-cyan-600 dark:text-cyan-300" />
              <span>대규모 P&amp;ID <strong className="text-slate-900 dark:text-white">DWG→SVG</strong> 변환 파이프라인 &amp; 태그 게이트웨이(C#)</span>
            </li>
            <li className="flex items-start gap-2">
              <BookOpen className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-300" />
              <span>DataParc XAML→SVG 연계, 공정도·설비데이터 통합 뷰어 개발</span>
            </li>
            <li className="flex items-start gap-2">
              <Briefcase className="mt-1 h-5 w-5 text-violet-600 dark:text-violet-300" />
              <span>포미트 DX사업실 (2025.06~) · 부산 광안동</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="/about"
              className="
                group inline-flex items-center justify-center rounded-xl
                bg-slate-900 text-white hover:bg-slate-800
                dark:bg-white dark:text-gray-900 dark:hover:bg-white/90
                px-5 py-3 text-sm font-semibold shadow-lg transition
              "
            >
              경력 알아보기
              <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="https://diaryjoonho.web.app/"
              className="
                inline-flex items-center justify-center rounded-xl
                border border-slate-300 bg-white text-slate-900 hover:bg-slate-50
                dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
                px-5 py-3 text-sm font-semibold transition
              "
            >
              업무 기록
            </Link>

            <Link
              href="https://github.com/Centumjoonho"
              className="
                inline-flex items-center justify-center rounded-xl
                border border-slate-300 bg-white text-slate-900 hover:bg-slate-50
                dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
                px-5 py-3 text-sm font-semibold transition
              "
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </div>

          {/* Tech badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            {[
              "C#/.NET",
              "WinForms · DevExpress",
              "SVG/XML · Regex",
              "Java · Spring",
              "Node.js",
              "MySQL · MSSQL",
              "Next.js · React",
            ].map((t) => (
              <span
                key={t}
                className="
                  rounded-full
                  border border-slate-300 bg-white text-slate-700
                  dark:border-white/10 dark:bg-white/5 dark:text-white/70
                  px-3 py-1 backdrop-blur
                "
              >
                {t}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-3 text-center sm:max-w-md">
            {[
              { v: "8+", l: "Projects" },
              { v: "4", l: "Core Stacks" },
              { v: "DX", l: "Focus" },
            ].map((s) => (
              <div
                key={s.l}
                className="
                  rounded-xl
                  border border-slate-200 bg-white text-slate-800
                  dark:border-white/10 dark:bg-white/5 dark:text-white/80
                  p-4 backdrop-blur
                "
              >
                <div className="text-2xl font-bold">{s.v}</div>
                <div className="text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === Right: Visual === */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 w-full md:mt-0 md:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-200/40 to-indigo-200/30 blur-2xl dark:from-cyan-500/20 dark:to-indigo-500/10" />
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-white/5">
              <Anime />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 참고: 다크 전용 그리드 유틸이 있다면 유지하세요.
.bg-grid-slate-800\/20 {
  background-image: linear-gradient(to right, rgba(30,41,59,0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(30,41,59,0.2) 1px, transparent 1px);
  background-size: 32px 32px;
}
*/
