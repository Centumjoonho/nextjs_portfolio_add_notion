import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const Title = data.properties.Name.title[0]?.plain_text;
  const GitHub = data.properties.GitHub.url;
  const Blog = data.properties.Blog.url;
  const URL = data.properties.URL.url;
  const Description = data.properties.Description.rich_text[0]?.plain_text;
  const ImageSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.Date.date?.start;
  const end = data.properties.Date.date?.end;

  const calPeriod = (start, end) => {
    const startStringArray = start.split("-");
    const endStringArray = end.split("-");

    var startDate = new Date(
      startStringArray[0],
      startStringArray[1],
      startStringArray[2]
    );
    var endDate = new Date(
      endStringArray[0],
      endStringArray[1],
      endStringArray[2]
    );
    console.log("startD", startDate);
    console.log("endDate", endDate);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };
  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={ImageSrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-col w-full p-2">
        <h1 className="text-2xl font-bold ">{Title}</h1>
        <h3 className="mt-4 text-xl">{Description}</h3>
        <div className="my-2 text-base font-bold flex flex-col">
          <a href={GitHub}>🔥GitHub Code 확인 Click </a>
          <a href={Blog}>💻개발 문서 및 블로그 확인 Click</a>
          <a href={URL}>🔗배포 완료 웹사이트 이동 Click</a>
          <p className="my-2">
            {start}~{end} ( {calPeriod(start, end)} ) 일
          </p>

        </div>

        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-blue-300 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
