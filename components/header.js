import Link from "next/link";
import DMTBtn from "./dark-m-t-btn";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <Link href="/" legacyBehavior>
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 fill-indigo-500 dark:fill-gray-100 hover:fill-violet-500 hover:dark:fill-slate-400"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <g
                  transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
                  stroke="none"
                >
                  <path
                    d="M4390 5952 c-113 -53 -289 -221 -427 -409 -84 -114 -98 -125 -153
-117 -171 27 -523 -80 -714 -217 l-98 -71 -97 71 c-186 137 -427 215 -661 215
l-115 0 -91 123 c-228 310 -551 543 -524 378 5 -30 19 -167 31 -305 12 -137
30 -281 40 -318 17 -66 13 -74 -119 -213 -336 -354 -415 -830 -210 -1265 l50
-106 -38 -104 c-235 -632 -120 -1587 226 -1874 64 -53 11 -59 -607 -64 l-636
-6 -79 -55 c-242 -167 -208 -515 61 -637 75 -34 153 -37 1058 -38 l977 0 -13
-75 c-25 -132 -109 -254 -295 -425 -213 -197 -351 -454 -221 -414 553 173 689
197 799 139 298 -158 287 -155 466 -155 179 0 168 -3 466 155 110 58 246 34
799 -139 130 -40 -8 217 -221 414 -186 171 -270 293 -295 425 l-13 75 977 0
c905 1 983 4 1058 38 269 122 303 470 61 637 l-79 55 -636 6 c-618 5 -671 11
-607 64 346 287 461 1244 225 1877 l-39 107 51 103 c208 416 127 909 -208
1262 -135 141 -136 144 -120 222 10 43 27 178 39 299 13 121 27 258 32 305 5
47 7 85 5 85 -3 0 -50 -22 -105 -48z m-1960 -899 c250 -67 549 -348 550 -518
0 -19 9 -35 20 -35 11 0 20 16 20 35 1 170 300 451 550 518 734 196 1249 -740
706 -1280 -233 -231 -581 -286 -874 -138 -71 36 -130 63 -132 60 -2 -3 -61
-115 -132 -250 -70 -135 -132 -245 -138 -245 -6 0 -68 110 -138 245 -71 135
-130 247 -132 250 -2 3 -61 -24 -132 -60 -297 -151 -682 -79 -905 167 -500
553 23 1441 737 1251z m-55 -3239 c25 -23 45 -55 45 -72 0 -19 25 -1 61 43 78
95 190 105 270 26 47 -47 49 -60 49 -311 0 -251 -2 -264 -49 -311 -80 -79
-192 -69 -270 26 -40 49 -61 63 -61 41 0 -104 -198 -150 -294 -68 l-56 49 0
260 c0 246 3 262 47 310 75 79 175 82 258 7z m1146 -31 c36 -44 59 -60 59 -41
0 114 205 162 298 70 51 -52 52 -59 52 -314 l0 -261 -56 -49 c-93 -80 -294
-37 -294 63 0 16 -9 29 -20 29 -11 0 -20 -11 -20 -24 0 -108 -203 -155 -291
-67 -54 55 -75 504 -27 594 57 108 210 108 299 0z"
                  />
                  <path
                    d="M2090 4647 c-352 -186 -235 -697 160 -697 391 0 514 514 166 692 -91
46 -243 48 -326 5z"
                  />
                  <path
                    d="M3590 4647 c-352 -186 -235 -697 160 -697 391 0 514 514 166 692 -91
46 -243 48 -326 5z"
                  />
                </g>
              </svg>

              <span className="ml-3 text-xl">Centum 준호</span>
            </a>
          </Link>

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
              <a className="mr-5 hover:text-gray-900">B</a>
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
          </nav>
          {/* darkmodetoggleButton */}
          <DMTBtn></DMTBtn>
        </div>
      </header>
    </>
  );
}
