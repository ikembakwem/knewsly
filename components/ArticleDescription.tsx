import { ArticleData } from "./ArticleCard";

type Props = {
  data: ArticleData;
};

export const ArticleDescription = ({ data }: Props) => {
  return (
    <div className="hidden cursor-pointer lg:block lg:basis-4/12 lg:text-sm leading-normal text-lightText">
      {typeof data?.description === "string"
        ? data.description.length > 195
          ? `${data.description.substring(0, 195)}...`
          : data.description
        : typeof data.content === "string"
        ? data.content.length > 195
          ? `${data.content.substring(0, 195)}...`
          : data.content
        : "Click to view full story"}
    </div>
  );
};
