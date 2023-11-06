import { ArticleHeader } from "./ArticleHeader";
import { ArticleDescription } from "./ArticleDescription";
import { ArticleImage } from "./ArticleImage";

type ArticleData = {
  author: string;
  title: string;
  publishedAt: Date;
  content: string;
  urlToImage: string;
  description: string;
  url: string;
  source?: { name: string };
  featured?: boolean;
};

export const ArticleCard = ({
  author,
  title,
  publishedAt,
  content,
  urlToImage,
  description,
  url,
  source,
  featured = false
}: ArticleData) => {
  return (
    <div className="relative flex flex-wrap justify-between pt-6 mt-4 mb-6 border-t-2 border-borderLine cursor-pointer lg:hover:opacity-60">
      <ArticleHeader
        featured={featured}
        category="Business"
        title={title}
        author={author}
        publishedAt={publishedAt}
        url={url}
        source={source}
      />
      <ArticleDescription content={content} description={description} />
      <ArticleImage urlToImage={urlToImage ? urlToImage : `/images/newsImgPlaceholder.jpg`} />
    </div>
  );
};
