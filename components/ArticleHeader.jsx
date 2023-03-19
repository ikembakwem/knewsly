import {
  HeaderContainer,
  CategoryTitle,
  ArticleTitle,
  ArticleHeadFooter,
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
    <HeaderContainer>
      <CategoryTitle>{source.name}</CategoryTitle>
      <ArticleTitle>
        <Link href={url}>
          <a target="_blank">{title}</a>
        </Link>
      </ArticleTitle>
      <ArticleHeadFooter>
        <Author>{author}</Author>
        <DateTime date={publishedAt} />
      </ArticleHeadFooter>
    </HeaderContainer>
  );
};
