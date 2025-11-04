import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, AtSign, Github, Layers, Code2, Cpu, BookOpen, MapPin, ChevronRight } from "lucide-react";

export default function About() {
  return (
    <main className="relative mx-auto max-w-5xl px-6 py-16">
      {/* ==== Background (Light/Dark) ==== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cyan-50 via-indigo-50 to-transparent dark:bg-[radial-gradient(110%_60%_at_50%_-10%,rgba(56,189,248,.25),rgba(99,102,241,.15)_35%,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,.7),rgba(0,0,0,.2),transparent)]"
      />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <Layers size={14} />
          <span>About · DX Software Engineer</span>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">이준호 | Backend & DX Engineer</h1>
        <p className="mt-2 text-lg text-slate-700 dark:text-white/70">
          산업 현장의 데이터를 연결하고, 공정도를 도구로 만드는 개발자입니다. 대규모 P&amp;ID 자산의 <strong className="text-slate-900 dark:text-white">DWG→SVG</strong> 변환 파이프라인, 태그 자동 연계 게이트웨이, DataParc 연계 뷰어를 중심으로 DX 가치를 만듭니다.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <Link href="https://github.com/Centumjoonho" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
            <Github className="h-4 w-4" /> github.com/Centumjoonho
          </Link>
          <a href="mailto:ghwnsgkgk@kakao.com" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
            <AtSign className="h-4 w-4" /> ghwnsgkgk@kakao.com
          </a>
        </div>
      </header>

      {/* Profile summary */}
      <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Profile</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-white/80">
          스마트팩토리 개발자 양성 프로그램에서 C#으로 6개월 학습 후 (주)미래정보기술의 조천감귤농협 물류센터 MES 개발 프로젝트에 참여했습니다. 이후 재영소프트 센텀 연구소에서 다양한 R&amp;D, 모바일 앱, 공공기관 SM/SI 프로젝트를 수행하며 Java 백엔드 중심의 REST API 설계/구현 경험을 축적했습니다.
          <br />
          <br />
          현재는 <strong className="text-slate-900 dark:text-white">부산 광안동 포미트(FORMIT) DX사업실</strong>에서 C# 기반 P&amp;ID 시스템 및 DataParc 연계 게이트웨이 프로그램을 개발합니다. 서부발전 P&amp;ID <strong>DWG→SVG</strong> 변환과 <strong>태그 자동 연계</strong> 파이프라인을 구축했고, <strong>DataParc XAML→SVG</strong> 변환/연계로 설비데이터·공정도 통합을 추진하고 있습니다.
        </p>
      </section>

      {/* Experience (Current) */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Experience</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-slate-800 dark:text-white">
              <Briefcase className="h-5 w-5 text-violet-600 dark:text-violet-300" />
              <span className="font-semibold">포미트(FORMIT) · DX 사업실 · 개발자</span>
            </div>
            <div className="text-sm text-slate-600 dark:text-white/60">2025.06 – 현재 · 부산 광안동</div>
          </div>

          <p className="mt-3 text-slate-700 dark:text-white/80">서부발전 P&amp;ID 관련 내부 공정도 뷰어/게이트웨이 제품 개발 및 데이터 연계 자동화</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-white/80">
            <li>P&amp;ID DWG → SVG 변환 파이프라인 구축 및 대용량 일괄 처리 자동화</li>
            <li>SVG 텍스트/태그 매핑 로직 및 <code>pmt:id</code> 기준 하이라이트/검색/줌 기능</li>
            <li>서부발전 P&amp;ID SVG Viewer (WinForms + DevExpress) 기능 개발 및 최적화</li>
            <li>DataParc 뷰어 연동 및 XAML → SVG 변환 · 태그 연계 Gateway(C#)</li>
            <li>배치 처리/예외 로깅/재시도 큐 등 안정화 유틸리티 구현</li>
          </ul>
          <p className="mt-3 text-xs text-slate-500 dark:text-white/50">Tech: C#, .NET, WinForms, DevExpress, Regex, LINQ, ClosedXML, SVG/XML, DWG, DataParc, XAML</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Code2 className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />Strong</div>
            <ul className="space-y-1 text-slate-700 dark:text-white/80">
              <li>FrontEnd: JavaScript / jQuery / React / Next.js</li>
              <li>BackEnd: Java(Spring) / Node.js / C#</li>
              <li>DBMS: MySQL / MSSQL</li>
              <li>Server: Apache Tomcat</li>
              <li>Tools: Eclipse(eGovFrame) / VS Code / VS 2017</li>
              <li>App-Dev: React Native</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />Knowledgeable</div>
            <p className="text-slate-700 dark:text-white/80">Python / React Native / Nest.js / Next.js / MongoDB / Firebase</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><BookOpen className="h-5 w-5 text-violet-600 dark:text-violet-300" />Collaborations</div>
            <p className="text-slate-700 dark:text-white/80">Slack / Git / SVN</p>
          </div>
        </div>
      </section>

      {/* Projects (selected) */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Selected Projects</h2>
        <div className="space-y-6">
          <ProjectCard
            title="KISA 지능형 CCTV 평가도구 고도화 (6개월/3명) [PL]"
            period="2021.06 – 2021.12"
            link={{ href: "https://github.com/Centumjoonho/cctv", label: "github.com/Centumjoonho/cctv" }}
            bullets={[
              "이동형 CCTV 촬영 방식용 SA 미탐지 프레임 Avg IoU 계산 적용",
              "Blender 에드온 스크립트로 3D 산불 데이터셋 자동 생성 (300 샘플)",
              "시험도구 UI 개선 및 협력사 주간 집중 회의 운영"
            ]}
          />

          <ProjectCard
            title="전기차 QR 충전 앱 · 메인 지도 Full Stack (미출시)"
            period="2023.05 – 2023.11"
            link={{ href: "https://www.figma.com/EVapp", label: "Figma Prototype" }}
            bullets={[
              "환경부 전기차 충전소 공공데이터 + Naver 지도 + Kakao 검색 연동",
              "공공데이터↔로컬 DB 동기화 및 조건/지역 검색 알고리즘",
              "요청 최소화 세그먼트 기법 적용(≈67% 성능 향상)"
            ]}
          />

          <ProjectCard
            title="한국장애인개발원 SM/고도화"
            period="2022.11 – 진행중"
            link={null}
            bullets={[
              "대표홈페이지/UD/인천전략기금 등 다수 서비스 운영·고도화",
              "사보웹진 운영 시스템/접속 통계 페이지 개발",
              "서버 마이그레이션 총괄 및 웹접근성 인증 관리"
            ]}
          />

          <ProjectCard
            title="가천대 장애인용 스마트재활기기 프로젝트 (8개월/4명)"
            period="2023.11 – 진행중"
            link={{ href: "https://github.com/Centumjoonho/smart-sangji-system", label: "Server" }}
            extraLink={{ href: "https://github.com/Centumjoonho/sangji-user-application", label: "User App" }}
            bullets={[
              "React Native 앱 안정화 및 성능 최적화",
              "Django REST API 추가·CRUD 연동",
              "MediaPipe 기반 피사체 크기 분석/트래킹"
            ]}
          />
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">한국품질재단 스마트팩토리 SW양성과정</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-white/80">
            <li>C#, HTML5, PHP/JSP, DB, 라즈베리파이, MES/HMI/SE (이론 480h, 실습 480h)</li>
          </ul>
          <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">부산벤처기업협회</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-white/80">
            <li>스마트 시티 생활/복지 인공지능 솔루션 (48h)</li>
            <li>Orange3 Data Mining / CNN·DNN 기반 유동 인구 예측</li>
            <li>시각데이터 활용 딥러닝 분석 / 생성 AI 적용</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">기술 블로그에서 더 보기</h3>
          <p className="text-sm text-slate-600 dark:text-white/60">업무 기록과 실험 노트를 정리합니다.</p>
        </div>
        <Link href="/blog" className="group inline-flex items-center gap-1 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90">
          이동하기 <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </section>
    </main>
  );
}

function ProjectCard({ title, period, link, extraLink, bullets }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <span className="text-sm text-slate-600 dark:text-white/60">{period}</span>
      </div>
      {(link || extraLink) && (
        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">
          {link && (
            <a href={link.href} target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline dark:text-cyan-300">
              {link.label}
            </a>
          )}
          {extraLink && (
            <a href={extraLink.href} target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline dark:text-cyan-300">
              {extraLink.label}
            </a>
          )}
        </div>
      )}
      <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-white/80">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </motion.article>
  );
}
