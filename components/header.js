import Link from "next/link";
import DMTBtn from "./dark-m-t-btn";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <Link href="/" legacyBehavior>
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              <span className="ml-3 text-xl">Centum 준호</span>
            </a></Link>

          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <Link href="/" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">H</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">P</a>
            </Link>
            <Link
              href="https://smart-factory-lee-joon-ho.tistory.com/"
              legacyBehavior
            >
              <a className="mr-5 hover:text-gray-900">Tistory</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">C</a>
            </Link>
            <Link
              href="https://hikehigh-deploy-next.vercel.app/"
              legacyBehavior
            >
              <a className="mr-5 hover:text-gray-900">종주중독</a>
            </Link>
                 <Link
              href="https://centum-community-2baf8b931596.herokuapp.com/"
              legacyBehavior
            >
              <a className="mr-5 hover:text-gray-900">게시판</a>
            </Link>
                
          </nav>
          {/* darkmodetoggleButton */}
          <DMTBtn></DMTBtn>
        </div>
      </header>
    </>
  );
}
