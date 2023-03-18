import { DescriptionWrapper } from "./styles";

export const ArticleDescription = ({
  content,
  description,
}) => {
  return (
    <DescriptionWrapper>
      {content
        ? content.length > 195
          ? `${content.substring(0, 195)}...`
          : content
        : description}
    </DescriptionWrapper>
  );
};
