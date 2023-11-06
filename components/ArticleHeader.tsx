import { DateTime } from "./DateTime";
import Link from "next/link";

type Props = {
  category?: string;
  title: string;
  author?: string;
  publishedAt: Date;
  url: string;
  source?: { name: string };
  featured?: boolean;
};

export const ArticleHeader = ({
  category,
  title,
  author,
  publishedAt,
  url,
  source,
  featured
}: Props) => {
  return (
    <header className="basis-8/12 lg:basis-4/12 min-w-0">
      <div
        className={`flex text-sm leading-none mb-2 text-brightYellow ${
          featured && "pt-1 text-lg font-bold uppercase"
        }`}
      >
        {source?.name || "News"}
      </div>
      <h2 className="text-xl cursor-pointer mt-0 mb-1 font-black leading-none tracking-tight lg:mb-3">
        <Link href={url}>
          <a target="_blank">{title}</a>
        </Link>
      </h2>
      <div className="text-sm leading-normal text-lightText">
        <span className="font-bold text-darkText leading-tight">{author || "Anonymous"}</span>
        <DateTime date={publishedAt} />
      </div>
    </header>
  );
};
