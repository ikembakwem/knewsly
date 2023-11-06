import { ArticleHeader } from "./ArticleHeader";
import { ArticleDescription } from "./ArticleDescription";
import { ArticleImage } from "./ArticleImage";

export type ArticleData = {
  author: string | null;
  title: string;
  publishedAt: string;
  content: string | null;
  urlToImage?: string;
  description: string | null;
  url: string;
  source: { name: string } | null;
};

type Props = {
  data: ArticleData;
};

export const ArticleCard = ({ data }: Props) => {
  return (
    <div className="relative flex flex-wrap justify-between pt-6 mt-4 mb-6 border-t-2 border-borderLine cursor-pointer lg:hover:opacity-60">
      <ArticleHeader data={data} />
      <ArticleDescription data={data} />
      <ArticleImage
        urlToImage={data.urlToImage ? data.urlToImage : `/images/newsImgPlaceholder.jpg`}
      />
    </div>
  );
};
