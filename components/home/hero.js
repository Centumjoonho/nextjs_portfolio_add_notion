import Anime from "./anime";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pencil, BookOpen, Lightbulb, Code } from "lucide-react";

export default function Hero() {
  const buttons = [
    { href: "https://diaryjoonho.web.app/", text: "업무 기록", icon: Pencil },
    { href: "/about", text: "경력 알아보기", icon: BookOpen },
    { href: "https://richidea-16a42.web.app/", text: "AI 아이디어 생성기", icon: Lightbulb },
    { href: "https://llamaaitest.web.app/", text: "Meta Llama WebBuilder", icon: Code },
  ];

  return (
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
        <div className="flex flex-col space-y-2">
          {buttons.map((button, index) => (
            <Link key={index} href={button.href} passHref>
              <Button
                className="w-full justify-between text-left"
                variant="outline"
              >
                <span className="flex items-center">
                  <button.icon className="w-5 h-5 mr-2" />
                  {button.text}
                </span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-5/6 md:w-1/2">
        <Anime />
      </div>
    </div>
  );
}
