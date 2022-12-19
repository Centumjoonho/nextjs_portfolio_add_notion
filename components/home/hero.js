import Anime from "./anime";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          Centum 준호입니다.
          <br className="hidden lg:inline-block" />
          <br></br>
          2023년
        </h1>
        <p className="mb-8 leading-relaxed">
          이때 뚜우 하고 정오 사이렌이 울었다. 사람들은 모두 네 활개를 펴고
          닭처럼 푸드덕거리는 것도 같고, 온갖 유리와 강철과 대리석과 지폐와
          잉크가 부글부글 끓고 구선을 떨고 하는 것 같은 찰나, 그야말로 현란을
          극한 정오다, 나는 불현듯이 겨드랑이가 가렵다. 아하, 그것은 내 인공의
          날개가 돋았던 자국이다. 오늘은 없는 날개. 나는 걷던 걸음을 멈추고
          그리고 어디 한 번 이렇게 외쳐보고 싶었다. 날개야, 다시 돋아라. 날자,
          날자, 날자, 한 번만 날자꾸나. 한 번만 더 날아 보자꾸나.
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
