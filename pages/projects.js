import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config/index";
import ProjectItem from "../components/projects/project-item";
import Link from "next/link";

export default function Projects({ projects }) {
  console.log("projects", projects);
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 mb-10">
          <Head>
            <title>Centum_Joonho_Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* <h1>
            <span className="pl-4 text-blue-500">
              {projects.results.length}
            </span>
          </h1> */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.results.map((aProject) => (
              <ProjectItem key={aProject.id} data={aProject} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="https://docs.google.com/spreadsheets/d/1dRQspcl7zcKPdYzWbCLk-AUwc-0Ob_aEot9x-MZW5UU/edit#gid=1709744959"
              legacyBehavior
            >
              <a className="btn-work">My Works</a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
//빌드 타임에 호출 !  딱 1번
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  // const projectIds = projects.results.map((project) => project.id);
  // console.log("project.id", projectIds);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
