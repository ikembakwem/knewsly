import { ArticleHeader } from "./ArticleHeader";
import { ArticleDescription } from "./ArticleDescription";
import { ArticleImage } from "./ArticleImage";
import { Content } from "./styles";

export const ArticleCard = ({ data }) => {
  const {
    author,
    title,
    publishedAt,
    content,
    urlToImage,
    description,
  } = data;
  return (
    <Content>
      <ArticleHeader
        category="Business"
        title={title}
        author={author}
        publishedAt={publishedAt}
      />
      <ArticleDescription
        content={content}
        description={description}
      />
      <ArticleImage url={urlToImage} />
    </Content>
  );
};
