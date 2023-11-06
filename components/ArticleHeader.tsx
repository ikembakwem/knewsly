import { ArticleData } from "./ArticleCard";
import { DateTime } from "./DateTime";
import Link from "next/link";

type Props = {
  data: ArticleData;
};

export const ArticleHeader = ({ data }: Props) => {
  return (
    <header className="basis-8/12 lg:basis-4/12 min-w-0">
      <div className="flex text-sm leading-none mb-2 text-brightYellow">
        {data.source?.name || "News"}
      </div>
      <h2 className="text-xl cursor-pointer mt-0 mb-1 font-black leading-none tracking-tight lg:mb-3">
        <Link href={data.url} target="_blank">
          {data.title}
        </Link>
      </h2>
      <div className="text-sm leading-normal text-lightText">
        <span className="font-bold text-darkText leading-tight">{data.author || "Anonymous"}</span>
        <DateTime date={data.publishedAt} />
      </div>
    </header>
  );
};
