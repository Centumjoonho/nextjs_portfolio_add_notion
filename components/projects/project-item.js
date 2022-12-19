// import Image from "next/image";
import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const Title = data.properties.Name.title[0]?.plain_text;
  const GitHub = data.properties.GitHub.url;
  const Blog = data.properties.Blog.url;
  const Description = data.properties.Description.rich_text[0]?.plain_text;
  const ImageSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.Date.date?.start;
  const end = data.properties.Date.date?.end;

  console.log("start", start);
  console.log("end", end);

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

    console.log(`기간 : ${result}`);
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
        <a href={GitHub}>GitHub check</a>
        <a href={Blog}>센텀준호 Blog </a>
        <p className="my-1">
          {start}~{end} ( {calPeriod(start, end)} ) 일
        </p>

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
