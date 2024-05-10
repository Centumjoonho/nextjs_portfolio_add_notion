import Anime from "../home/anime";
import Link from "next/link";

export default function BlogDetails() {
  const blogPosts = [
    { id: 1, title: "BLENDER : PYTHON 블랜더 파이썬으로 코딩하여 플러그인 개발하기 no.1", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/blender-python-%EB%B8%94%EB%9E%9C%EB%8D%94-%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%EC%BD%94%EB%94%A9%ED%95%98%EC%97%AC-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0-no1", date: "2023-06-01", author: "이준호", views: 100 },
    { id: 2, title: "CVAT 오픈소스 구축 방법 정확하게 알려드립니다 feat . Docker, Git 세팅", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/CVAT-%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%ED%99%9C%EC%9A%A9-Docker-Git-%EC%82%AC%EC%9A%A9-%EB%B2%95", date: "2023-06-02", author: "이준호", views: 15 },
    { id: 3, title: "EXCEL에서 CODE 128 폰트로 읽을 수 있는 바코드 만들기 렛츠 고우", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/EXCEL에서-CODE-128-폰트로-읽을-수-있는-바코드-만들기", date: "2023-06-03", author: "이준호", views: 40 },
    { id: 3, title: "Uncaught (in promise) TypeError: Failed to fetch 이런 실수 내가 합니다.", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/Uncaught-in-promise-TypeError-Failed-to-fetch", date: "2023-06-03", author: "이준호", views: 35 },
    { id: 3, title: "Nest.js 는 Node.js 의 프레임워크 오케이 ?  RestAPI 만들어 보자", url: "https://smart-factory-lee-joon-ho.tistory.com/entry/Nestjs-%EB%8A%94-Nodejs-%EC%9D%98-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EC%98%A4%EC%BC%80%EC%9D%B4-RestAPI-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EC%9E%90", date: "2023-06-03", author: "이준호", views: 80 },
    // 추가적인 블로그 글 정보를 여기에 추가할 수 있습니다.
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">기술 블로그 Hot Contents</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/12 px-4 py-2">번호</th>
              <th className="w-6/12 px-4 py-2">제목</th>
              <th className="w-2/12 px-4 py-2">작성자</th>
              <th className="w-2/12 px-4 py-2">작성일</th>
              <th className="w-1/12 px-4 py-2">조회수</th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post, index) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2">
                  <Link href={post.url} target="_blank" legacyBehavior>
                    <a className="text-blue-500 hover:underline">{post.title}</a>
                  </Link>
                </td>
                <td className="px-4 py-2 text-center">{post.author}</td>
                <td className="px-4 py-2 text-center">{post.date}</td>
                <td className="px-4 py-2 text-center">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}