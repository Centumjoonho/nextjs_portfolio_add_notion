import Anime from "./anime";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-8 px-4 mx-auto md:flex-row md:mb-16">
        <div className="mb-8 text-center md:w-1/2 md:pr-16 md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            2024년 이준호
          </h1>
          <p className="mb-8 text-2xl sm:text-3xl">
            기술연구소 BackEnd 개발자
          </p>
          <div className="text-base sm:text-lg mb-8">
            <p className="mb-0.5">🔥 새로운 분야에 대한 지적 호기심</p>
            <p className="mb-0.5">📕 기술을 상세히 기록하는 학습능력</p>
            <p className="mb-0.5">💬 정확한 소통을 통한 빠른 업무처리 능력</p>
            <p className="mb-2">🚀 업무 일정을 정확하게 소화하는 추진능력</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="/projects" className="btn-project">
              더 알아보기!
            </Link>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2">
          <Anime></Anime>
        </div>
      </div>
    </>
  );
}