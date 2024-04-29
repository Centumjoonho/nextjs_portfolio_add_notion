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
            <h3 className="text-xl font-semibold mb-2">KISA 지능형 CCTV 평가도구 고도화 (6개월/3명) [PL]</h3>
            <p className="text-lg mb-2">
              기간 : 2021.06~2021.12 / 링크 : <a href="https://github.com/Centumjoonho/cctv" className="text-blue-500 underline">https://github.com/Centumjoonho/cctv</a>
            </p>
            <p className="text-lg mb-2">
              지능형 CCTV 영상 시험도구 평가 방식 개선 및 산물 데이터셋 제작도구 개발
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>이동형 CCTV 촬영 방식을 위한 IoU 계산 방식 적용</li>
              <li>3D 영상 제작도구 Blender 에드온 형식 Script 개발</li>
              <li>연기 및 화염 제작을 위한 최적 Blender 파라메터 세팅</li>
              <li>사용자 편의성 반영 시험도구 UI 개선 </li>
              <li>매주 수요일 협력사 집중 회의 진행 </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">전기차 QR 충전 앱 개발 (1년/5명) 메인 지도 화면 Full Stack</h3>
            <p className="text-lg mb-2">
              기간 : 2019.01~2020.02 / 링크 : <a href="https://www.naver.com/" className="text-blue-500 underline">https://www.naver.com/</a>
            </p>
            <p className="text-lg mb-2">
              환경부 공공데이터 API  + Naver 지도 API + Kakao 검색 API로 인근지역 , 검색지역 전기차 충전소 조회
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>환경부 전기차 충전소 공공 데이터 API 호출 , REST API 구축</li>
              <li>환경부 전기차 충전소 공공 데이터 데이터베이스 동기화 처리</li>
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