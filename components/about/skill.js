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
              <li>이동형 CCTV 촬영 방식을 위한 SA 미탐지 프레임 Avg IoU 계산 방식 적용</li>
              <li>3D 영상 제작도구 Blender 에드온 형식 Script 개발</li>
              <li>연기 및 화염 제작을 위한 최적 Blender 파라메터 세팅</li>
              <li>Blender Script 자동화를 통한 300개 다른 산불 영상 제작</li>
              <li>사용자 편의성 반영 시험도구 UI 개선 </li>
              <li>매주 수요일 협력사 집중 회의 진행 </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">전기차 QR 충전 앱 개발 (1년/5명) 메인 지도 화면 Full Stack (미출시)</h3>
            <p className="text-lg mb-2">
              기간 : 2023.05~2023.11 / 링크 : <a href="https://www.figma.com/file/aNXpU6rdIM0oqaQoJQr5MB/%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EC%95%B1-%ED%99%94%EB%A9%B4-%EA%B8%B0%ED%9A%8D?type=design&node-id=0%3A1&mode=design&t=KAxXLh6wYu6Fm9kH-1" className="text-blue-500 underline">https://www.figma.com/EVapp</a>
            </p>
            <p className="text-lg mb-2">
              환경부 공공데이터 API  + Naver 지도 API + Kakao 검색 API로 인근지역 , 검색지역 전기차 충전소 조회
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>환경부 전기차 충전소 공공 데이터 API 호출 , REST API 구축</li>
              <li>환경부 전기차 충전소 공공 데이터 와 로컬 데이터베이스 동기화 처리</li>
              <li>사용자 편의성 기반 조건 검색 , 지역 검색 알고리즘 개발 </li>
              <li>법정동 OpenAPI 활용하여 GPS 기반 지역구 , 시 단위 인근 충전소 정보 제공 코드 개발</li>
              <li>서버 요청 최소화 세그먼트기법적용(67% 이상 성능향상)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">한국장애인개발원 SM 업무</h3>
            <p className="text-lg mb-2">
              기간 : 2022.11 ~ 진행중
            </p>
            <p className="text-lg mb-2">
              대표홈페이지 : <a href="https://www.koddi.or.kr/" className="text-blue-500 underline">https://www.koddi.or.kr/</a><br />
              Universal Design : <a href="https://www.koddi.or.kr/ud" className="text-blue-500 underline">https://www.koddi.or.kr/ud</a><br />
              인천전략기금 : <a href="https://mrr.koddi.or.kr/page/index_kor.jsp" className="text-blue-500 underline">https://mrr.koddi.or.kr</a><br />
            </p>
            <p className="text-lg mb-2">
              한국장애인개발원 부서별 웹사이트 유지보수 및 고도화 작업
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>한국장애인개발원 서버 마이그레이션 작업 총괄</li>
              <li>대표홈페이지 사보웹진 운영 시스템 개발</li>
              <li>대표홈페이지 사보웹진 사용자 접속 통계 페이지 개발</li>
              <li>Universal Design 교육 접수 신청 페이지 및 관리자 페이지 고도화</li>
              <li>한국장애인개발원 웹 서버 관리 및 웹접근성 인증 관리</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">가천대학교 장애인용 스마트재활기기 프로젝트(8개월/4명)</h3>
            <p className="text-lg mb-2">
              기간 : 2023.11~ 진행중
            </p>
            <p className="text-lg mb-2">
              관리 서버 링크 : <a href="https://github.com/Centumjoonho/smart-sangji-system" className="text-blue-500 underline">https://github.com/Centumjoonho/smart-sangji-system</a><br />
              사용자 앱 링크 : <a href="https://github.com/Centumjoonho/sangji-user-application" className="text-blue-500 underline">https://github.com/Centumjoonho/sangji-user-application</a><br />
            </p>
            <p className="text-lg mb-2">
              스마트재활기기 안드로이드 앱 , 장고 서버 , 사용자 ReactNative 앱 고도화 ( 상지 , 하지) 고도화 및 상용화 작업
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>사용자 앱(React Native 기반) 앱 에러 최적화 </li>
              <li> Django 서버 RestAPI 추가 개발 앱 연동 CRUD 구축 완료 </li>
              <li> 사용자 인체 피사체 크기 분석 및 최대 피사체 트레킹 코드 개발 ( 미디어 파이프 활용 ) </li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">education</h2>
          <div>
            <h3 className="text-xl font-semibold mb-2">한국품질재단 스마트팩토리 SW양성과정</h3>

            <ul className="list-disc list-inside text-lg mb-4">
              <li>C#, HTML5, PHP/JSP, 데이터베이스, 라즈베리파이, MES, HMI, SE,
                (이론 480h, 프로젝트 실습 480h)
              </li>


            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">부산벤처기업협회</h3>
            <ul className="list-disc list-inside text-lg">
              <li>스마트 시티 생활/복지 인공지능 솔루션 (48H)</li>
              <li>Orange3 Data Mining Tools 설치 및 기본사용법</li>
              <li>구글 Colab 환경에서 CNN, DNN을 이용한 기상에 따른 유동 인구 예측</li>
              <li>시각데이터(이미지, 영상)를 활용한 딥러닝 분석 실습</li>
              <li>스마트 생활/복지에 적용할 수 있는 생성 AI</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Community</h2>
          <div>
            <h3 className="text-2xl font-semibold mb-3">AI CLUB / 23.02 ~</h3>
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