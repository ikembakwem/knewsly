/* eslint-disable @next/next/no-img-element */
import { ArticleData } from "./ArticleCard";
import { DateTime } from "./DateTime";
import Link from "next/link";

type Props = {
  data: ArticleData;
};

export const FeaturedArticleCard = ({ data }: Props) => {
  return (
    <div className="relative flex flex-wrap justify-between pt-6 mt-4 mb-6 border-t-2 border-borderLine cursor-pointer lg:hover:opacity-60">
      <div className="basis-4/12 mb-4 cursor-pointer lg:order-2 lg:block lg:basis-8/12 lg:max-w-3xl lg:max-h-96">
        <img src={data.urlToImage} alt="Cover for post" className="w-full lg:h-full object-cover" />
      </div>

      <header className="basis-8/12 lg:basis-4/12 min-w-0">
        <div className="flex leading-none mb-2 text-brightYellow pt-1 text-lg font-bold uppercase">
          {data.source?.name || "News"}
        </div>
        <h2 className="text-xl cursor-pointer mt-0 mb-1 font-black leading-none tracking-tight lg:mb-3 lg:text-2xl">
          <Link href={data.url} target="_blank">
            {data.title}
          </Link>
        </h2>
        <div className="hidden cursor-pointer lg:block lg:basis-4/12 lg:mx-0 lg:mt-4 lg:mb-8 lg:text-sm leading-normal text-lightText">
          {data.description !== undefined
            ? data.description.length > 128
              ? `${data.description.substring(0, 128)}...`
              : data.description
            : data.content !== undefined
            ? data.content.length > 128
              ? `${data.content.substring(0, 128)}...`
              : data.content
            : "Click to view full story"}
        </div>
        <div className="text-sm leading-normal text-lightText">
          <span className="font-bold text-darkText leading-tight">
            {data.author || "Anonymous"}
          </span>
          <DateTime date={data.publishedAt} />
        </div>
      </header>
    </div>
  );
};
