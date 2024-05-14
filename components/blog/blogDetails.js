import Anime from "../home/anime";
import Link from "next/link";

export default function BlogDetails() {
  const blogPosts = [
    { id: 1, title: "BLENDER : PYTHON 블랜더 파이썬으로 코딩하여 플러그인 개발하기 no.1", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/blender-python-%EB%B8%94%EB%9E%9C%EB%8D%94-%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%EC%BD%94%EB%94%A9%ED%95%98%EC%97%AC-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0-no1", date: "2023-06-01", author: "이준호", views: 100 },
    { id: 2, title: "CVAT 오픈소스 구축 방법 정확하게 알려드립니다 feat . Docker, Git 세팅", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/CVAT-%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%ED%99%9C%EC%9A%A9-Docker-Git-%EC%82%AC%EC%9A%A9-%EB%B2%95", date: "2023-06-02", author: "이준호", views: 15 },
    { id: 3, title: "EXCEL에서 CODE 128 폰트로 읽을 수 있는 바코드 만들기 렛츠 고우", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/EXCEL에서-CODE-128-폰트로-읽을-수-있는-바코드-만들기", date: "2022-01-03", author: "이준호", views: 40 },
    { id: 4, title: "Uncaught (in promise) TypeError: Failed to fetch 이런 실수 내가 합니다.", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/Uncaught-in-promise-TypeError-Failed-to-fetch", date: "2023-09-20", author: "이준호", views: 35 },
    { id: 5, title: "Nest.js 는 Node.js 의 프레임워크 오케이 ?  RestAPI 만들어 보자", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/Nestjs-%EB%8A%94-Nodejs-%EC%9D%98-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EC%98%A4%EC%BC%80%EC%9D%B4-RestAPI-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EC%9E%90", date: "2024-04-19", author: "이준호", views: 80 },
    // 추가적인 블로그 글 정보를 여기에 추가할 수 있습니다.
  ];
  const RnDPosts = [
    { id: 1, title: "전기차 충전 인프라 사업의 미래 전망과 주요 Key Player들을 알아보자", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%EC%9D%B8%ED%94%84%EB%9D%BC-%EC%82%AC%EC%97%85%EC%9D%98-%EB%AF%B8%EB%9E%98-%EC%A0%84%EB%A7%9D%EA%B3%BC-%EC%A3%BC%EC%9A%94-Key-Player%EB%93%A4%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90", date: "2023-09-07", author: "이준호", views: 100 },
    { id: 2, title: "전기차 충전 플랫폼 사업을 시작하기 위해 전기차 충전 플랫폼 수익 구조를 알아보자 (소프트베리 , 플러그링크)", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EC%82%AC%EC%97%85%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4-%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EC%88%98%EC%9D%B5-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-%EC%86%8C%ED%94%84%ED%8A%B8%EB%B2%A0%EB%A6%AC-%ED%94%8C%EB%9F%AC%EA%B7%B8%EB%A7%81%ED%81%AC", date: "2023-09-07", author: "이준호", views: 15 },
    { id: 3, title: "[JAVA]대한민국 법정동 코드 reg-code-api  조회 API 사용방법 알려드리오", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/JAVA%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%B2%95%EC%A0%95%EB%8F%99-%EC%BD%94%EB%93%9C-reg-code-api-%EC%A1%B0%ED%9A%8C-API-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-%EC%95%8C%EB%A0%A4%EB%93%9C%EB%A6%AC%EC%98%A4", date: "2023-11-04", author: "이준호", views: 40 },
    { id: 4, title: "지도 api (네이버,카카오) + 공공데이터 활용 앱 개발 Test 영상", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%A7%80%EB%8F%84-api-%EB%84%A4%EC%9D%B4%EB%B2%84%EC%B9%B4%EC%B9%B4%EC%98%A4-%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%9C%EC%9A%A9-%EC%95%B1-%EA%B0%9C%EB%B0%9C-Test-%EC%98%81%EC%83%81", date: "2023-10-20", author: "이준호", views: 35 },
    { id: 5, title: "웹 컴포넌트의 새로운 세계: 웹 개발의 패러다임 변화", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%84%B8%EA%B3%84-%EC%9B%B9-%EA%B0%9C%EB%B0%9C%EC%9D%98-%ED%8C%A8%EB%9F%AC%EB%8B%A4%EC%9E%84-%EB%B3%80%ED%99%94", date: "2023-09-08", author: "이준호", views: 80 },
    { id: 6, title: "F1-Score에 대하여 [ 정분류율, 오분류율 , 민감도, 재현율, 특이도, 정확도, F1-Score]", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/F1-Score%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC-%EC%A0%95%EB%B6%84%EB%A5%98%EC%9C%A8-%EC%98%A4%EB%B6%84%EB%A5%98%EC%9C%A8-%EB%AF%BC%EA%B0%90%EB%8F%84-%EC%9E%AC%ED%98%84%EC%9C%A8-%ED%8A%B9%EC%9D%B4%EB%8F%84-%EC%A0%95%ED%99%95%EB%8F%84-F1-Score", date: "2024-04-18", author: "이준호", views: 80 },
    // 추가적인 블로그 글 정보를 여기에 추가할 수 있습니다.
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Hot Contents</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="project-card">
            <Link href={post.url} target="_blank" legacyBehavior>
              <a className="block p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <div className="text-gray-500 mb-2">
                  <span className="mr-4">{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="text-gray-500">조회수: {post.views}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold my-8">R&D Report</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {RnDPosts.map((post) => (
          <div key={post.id} className="project-card">
            <Link href={post.url} target="_blank" legacyBehavior>
              <a className="block p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <div className="text-gray-500 mb-2">
                  <span className="mr-4">{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="text-gray-500">조회수: {post.views}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-start mt-10">
        <Link href="https://smart-factory-lee-joon-ho.tistory.com" className="btn-project">
          센텀준호 블로그 이동
        </Link>
      </div>
    </div>
  );
}