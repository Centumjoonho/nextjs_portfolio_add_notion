import Anime from "../home/anime";
import Link from "next/link";

export default function Skill() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 text-left mx-auto px-4">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          <p className="mb-5">이준호 | 백엔드 개발자</p>
        </h1>
        <div className="mb-8">
          <p className="text-lg mb-2">
            스마트팩토리 개발자 양성 프로그램에서 C#으로 6개월 학습후 (주)미래정보기술에서 조천감귤농협 물류센터 MES 개발 참여하였습니다.<br />
            재영소프트 센텀 연구소에서 다양한 R&D 프로젝트 , 모바일 앱 개발 , 공공기관 SM , SI 프로젝트를 통해 Java 백엔드를 중심으로 다양한 언어로 REST API 구현 가능합니다.
          </p>
          <p className="text-lg">
            <strong>Github</strong>: <a href="https://github.com/Centumjoonho?" className="text-blue-500 underline" target="_blank">https://github.com/Centumjoonho</a>
          </p>
          <p className="text-lg">
            <strong>Email</strong>: ghwnsgkgk@kakao.com
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Strong</h3>
            <p className="text-lg"> FrontEnd : JavaScript/ JQuery/ React.js /Java / Spring / MySQL / MSSQL </p>
            <p className="text-lg"> BackEnd : Java / Spring / MySQL / MSSQL </p>
            <p className="text-lg"> DBMS : MySQL / MSSQL </p>
            <p className="text-lg"> Sever : Apache Tomcat</p>
            <p className="text-lg"> Tools :  Eclipse - 전자정부프레임워크 / Visual Studio Code</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Knowledgeable</h3>
            <p className="text-lg">Python /React Native /Nest.js / Next.js / MongoDB / FireBase</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Collaborations</h3>
            <p className="text-lg">Slack / Git / SVN  </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">기상정보지원체계(2년/6명) Front-End [PL]</h3>
            <p className="text-lg mb-2">
              기간 : 2021.01~2021.02 / 링크 : <a href="https://github.com/wnghdcjfe/IUtoon" className="text-blue-500 underline">https://github.com/wnghdcjfe/IUtoon</a>
            </p>
            <p className="text-lg mb-2">
              전투기, 항공기가 이착륙 전 습도, 온도, 풍속 등 기상상황을 실시간으로 보는 체계
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>코드리팩토링, 함수형 프로그래밍화, REST API 구축</li>
              <li>바람장미, 차트, 지도, 테이블 시각화 컴포넌트제작</li>
              <li>서버요청최소화 세그먼트기법적용(67% 이상 성능향상)</li>
              <li>HA에 따른 A & B 파일 / DB 부분적 동기화</li>
              <li>단방향 시리얼 통신모듈 개발</li>
              <li>관리자페이지 구축(업로드 / 입력 / 실시간자료, 로그조회)</li>
              <li>빌드 커스터마이징화 및 실시간 센서연동 및 표출</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">기상정보지원체계(2년/6명) Back-End</h3>
            <p className="text-lg mb-2">
              기간 : 2019.01~2020.02 / 링크 : <a href="https://www.naver.com/" className="text-blue-500 underline">https://www.naver.com/</a>
            </p>
            <p className="text-lg mb-2">
              전투기, 항공기가 이착륙 전 습도, 온도, 풍속 등 기상상황을 실시간으로 보는 체계
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>코드리팩토링, 함수형 프로그래밍화, REST API 구축</li>
              <li>바람장미, 차트, 지도, 테이블 시각화 컴포넌트제작</li>
              <li>서버요청최소화 세그먼트기법적용(67% 이상 성능향상)</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Award</h2>
          <div>
            <h3 className="text-xl font-semibold mb-2">국방부 표창장</h3>
            <p className="text-lg">19.04.11 / 국방정보본부장상★★★ / 육군(국방부)</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Community</h2>
          <div>
            <h3 className="text-xl font-semibold mb-2">큰돌의 터전 스터디 / 19.04 ~</h3>
            <p className="text-lg">매주마다 자연어처리 기술에 대한 최신논문을 읽고 코드 구현 등을 기반으로 스터디를 진행함</p>
          </div>
        </div>
      </div>
      {/* <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Anime></Anime>
      </div> */}
    </>
  );
}