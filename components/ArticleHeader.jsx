import {
  HeaderWrapper,
  CategoryTitle,
  ArticleTitle,
  Footer,
  Author,
} from "./styles";
import { DateTime } from "./DateTime";

export const ArticleHeader = ({
  category,
  title,
  author,
  publishedAt,
}) => {
  return (
    <HeaderWrapper>
      <CategoryTitle>{category}</CategoryTitle>
      <ArticleTitle>{title}</ArticleTitle>
      <Footer>
        <Author>{author}</Author>
        <DateTime date={publishedAt} />
      </Footer>
    </HeaderWrapper>
  );
};
