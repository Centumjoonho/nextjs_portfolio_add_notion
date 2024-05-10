import Anime from "./anime";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 text-left mx-auto px-4">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          2024년 이준호
        </h1>

        <p className="mb-14 text-3xl">기술연구소 BackEnd 개발자 </p>

        <div className="text-2xl">
          <p className="mb-2">🔥 새로운 분야에 대한 지적 호기심</p>
          <p className="mb-2">📕 기술을 상세히 기록하는 학습능력</p>
          <p className="mb-2">💬 정확한 소통을 통한 빠른 업무처리 능력</p>
          <p className="mb-9">🚀 계획한 일정을 정확하게 소화하는 추진능력</p>
        </div>


        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            My Projects
          </Link>
        </div>
      </div >
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Anime></Anime>
      </div>
    </>
  );
}
