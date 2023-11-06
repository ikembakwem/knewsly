type Props = {
  content?: string;
  description?: string;
};

export const ArticleDescription = ({ content, description }: Props) => {
  return (
    <div className="hidden cursor-pointer lg:block lg:basis-4/12 lg:text-sm leading-normal text-lightText">
      {description
        ? description
        : content
        ? `${`content.length > 195 ? ${content.substring(0, 195)}...`}`
        : "Click to view full story"}
    </div>
  );
};
