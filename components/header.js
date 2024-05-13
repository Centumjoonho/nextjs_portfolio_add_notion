import Link from "next/link";
import DMTBtn from "./dark-m-t-btn";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="text-gray-600 body-font bg-gray-100">
        <div className="container flex flex-wrap items-center justify-between p-5 mx-auto lg:flex-row">
          <Link href="/" legacyBehavior>
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font lg:mb-0">
              <span className="ml-3 text-3xl font-bold">Centum 준호</span>
            </a>
          </Link>
          <nav
            className={`lg:ml-auto lg:flex flex-wrap items-center text-base justify-center ${isOpen ? "block" : "hidden"
              } lg:block`}
          >
            <Link href="/" legacyBehavior>
              <a className="mr-5 text-xl font-bold hover:text-blue-600">HOME</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="mr-5 text-xl font-bold hover:text-blue-600">ABOUT</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-5 text-xl font-bold hover:text-blue-600">STUDY</a>
            </Link>
            {/* <Link href="https://smart-factory-lee-joon-ho.tistory.com/" legacyBehavior>
              <a className="mr-5 text-xl font-bold hover:text-blue-600">기술블로그</a>
            </Link> */}
            <Link href="/blog" legacyBehavior>
              <a className="mr-5 text-xl font-bold hover:text-blue-600">기술블로그</a>
            </Link>
            <Link href="https://centum-community-2baf8b931596.herokuapp.com/" legacyBehavior>
              <a className="mr-5 text-xl font-bold hover:text-blue-600">개인블로그</a>
            </Link>
            {/* <Link href="https://hikehigh-deploy-next.vercel.app/" legacyBehavior>
              <a className="mr-5 text-xl font-bold hover:text-blue-600">ALBUM</a>
            </Link> */}
            <Link href="https://next-joon-todo-deploy.vercel.app/todos" legacyBehavior>
              <a className="text-xl font-bold hover:text-blue-600">TODOS</a>
            </Link>
          </nav>
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-700 rounded-lg lg:hidden hover:bg-gray-400 ring-2 ring-gray-400 dark:text-gray-200 dark:ring-gray-200"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <DMTBtn></DMTBtn>
        </div>
      </header>
    </>
  );
}