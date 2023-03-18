import {
  HeaderWrapper,
  CategoryTitle,
  ArticleTitle,
  Footer,
  Author,
} from "./styles";
import { DateTime } from "./DateTime";
import Link from "next/link";

export const ArticleHeader = ({
  category,
  title,
  author,
  publishedAt,
  url,
  source,
}) => {
  return (
    <HeaderWrapper>
      <CategoryTitle>{source.name}</CategoryTitle>
      <ArticleTitle>
        <Link href={url}>
          <a target="_blank">{title}</a>
        </Link>
      </ArticleTitle>
      <Footer>
        <Author>{author}</Author>
        <DateTime date={publishedAt} />
      </Footer>
    </HeaderWrapper>
  );
};
