import Anime from "./anime";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 text-left mx-auto px-4">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          Centum 준호
          <br className="hidden lg:inline-block" />
          <br></br>
          2023년
        </h1>
        <p className="mb-8 leading-relaxed ">
          나는 불현듯이 겨드랑이가 가렵다.
          <br />
          아하, 그것은 내 인공의 날개가 돋았던 자국이다.
          <br />
          오늘은 없는 날개.
          <br />
          나는 걷던 걸음을 멈추고 그리고
          <br />
          어디 한 번 이렇게 외쳐보고 싶었다.
          <br />
          날개야, 다시 돋아라.
          <br />
          날자, 날자, 날자,
          <br />
          한 번만 날자꾸나.
          <br />
          한 번만 더날아 보자꾸나.
          <br />
          -이상-
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">My Projects</a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Anime></Anime>
      </div>
    </>
  );
}
