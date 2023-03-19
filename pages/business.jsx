import { ArticlesContainer, SectionTitle } from "../components/styles";
import { ArticleCard } from "../components/ArticleCard";
import { LoadingSpinner } from "../components/loaders";
import { useState, useEffect } from "react";
import fetcher from "../lib/fetcher";
import { FeaturedArticleCard } from "../components/FeaturedArticleCard";

export default function BusinessNews({ result }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(result);
    setLoading(false);
  }, [result]);

  if (loading) {
    return (
      <ArticlesContainer>
        <SectionTitle>Business News</SectionTitle>
        <LoadingSpinner />
      </ArticlesContainer>
    );
  }
  return (
    <>
      <ArticlesContainer>
        <SectionTitle>Business News</SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        <FeaturedArticleCard data={data[0]} />
        {data.slice(1).map((data) => (
          <ArticleCard key={Math.floor(Math.random() * 99999)} data={data} />
        ))}
      </ArticlesContainer>
    </>
  );
}

export async function getServerSideProps() {
  const result = await fetcher("business");

  return {
    props: { result },
  };
}
