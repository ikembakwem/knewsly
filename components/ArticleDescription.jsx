import { DescriptionContainer } from "./styles";

export const ArticleDescription = ({ content, description }) => {
  return (
    <DescriptionContainer>
      {content
        ? content.length > 195
          ? `${content.substring(0, 195)}...`
          : content
        : description}
    </DescriptionContainer>
  );
};
