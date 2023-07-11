import {
  ArticlesContainer,
  SectionTitle,
} from "../components/styles";
import { ArticleCard } from "../components/ArticleCard";
import fetcher from "../lib/fetcher";
import { FeaturedArticleCard } from "../components/FeaturedArticleCard";
import { Footer } from "../components/Footer";

export default function Hone({ posts }) {
  return (
    <>
      <ArticlesContainer>
        <SectionTitle>Sports News</SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        <FeaturedArticleCard data={posts[0]} />
        {posts.slice(1).map((post) => (
          <ArticleCard key={post.title} data={post} />
        ))}
      </ArticlesContainer>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = await fetcher("sports");

  return {
    props: { posts },
    revalidate: 60 * 5,
  };
}
