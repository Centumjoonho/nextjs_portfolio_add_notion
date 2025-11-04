import Anime from "./anime";
import Link from "next/link";
import About from './../../pages/about';

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-8 px-4 mx-auto md:flex-row md:mb-16">
        <div className="mb-8 text-center md:w-1/2 md:pr-16 md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-blue-400 title-font sm:text-4xl">
            2026년 이준호
          </h1>
          <p className="mb-8 text-2xl sm:text-3xl text-gray-400">
            Device eXperience SW 개발자
          </p>
          <div className="text-base sm:text-lg mb-8 text-gray-300">
            <p className="mb-0.5">🔥 새로운 분야에 대한 지적 호기심</p>
            <p className="mb-0.5">📕 기술을 상세히 기록하는 학습능력</p>
            <p className="mb-0.5">💬 정확한 소통을 통한 빠른 업무처리 능력</p>
            <p className="mb-2">🚀 업무 일정을 정확하게 소화하는 추진능력</p>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Link
              href="/about"
              className="w-1/2 px-6 py-3 text-base font-medium text-gray-900 bg-green-400 rounded-lg shadow-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              경력 알아보기
            </Link>
            <Link
              href="https://diaryjoonho.web.app/"
              className="w-1/2 px-6 py-3 text-base font-medium text-gray-900 bg-blue-400 rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              업무 기록
            </Link>

            <Link
              href="https://richidea-16a42.web.app/"
              className="w-1/2 px-6 py-3 text-base font-medium text-gray-900 bg-purple-400 rounded-lg shadow-md hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              AI 가상화폐 분석기 ⭐
            </Link>
            <Link
              href="https://ai-crypto-gwv3.vercel.app/"
              className="w-1/2 px-6 py-3 text-base font-medium text-gray-900 bg-red-400 rounded-lg shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Meta Llama WebBuilder
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
