import {
  ArticlesContainer,
  SectionTitle,
} from "../components/styles";
import Head from "next/head";
import { ArticleCard } from "../components/ArticleCard";
import { LoadingSpinner } from "../components/loaders";
import { useState, useEffect } from "react";
import fetcher from "../lib/fetcher";
import FeaturedArticleCard from "../components/FeaturedArticleCard";

export default function TechnologyNews({ result }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(result);
    setLoading(false);
  }, [result]);

  if (loading) {
    return (
      <ArticlesContainer>
        <SectionTitle>Tech News</SectionTitle>
        <LoadingSpinner />
      </ArticlesContainer>
    );
  }
  return (
    <>
      <Head>
        <title>Knewsly - Get the latest news</title>
        <meta
          name="description"
          content="Get the latest trending news in technology, business, sports and more. Find out what new about your favorite brand"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticlesContainer>
        <SectionTitle>Tech News</SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        <FeaturedArticleCard data={data[0]} />
        {data.slice(1).map((data) => (
          <ArticleCard
            key={Math.floor(Math.random() * 99999)}
            data={data}
          />
        ))}
      </ArticlesContainer>
    </>
  );
}

export async function getServerSideProps() {
  const result = await fetcher("technology");

  return {
    props: { result },
  };
}
