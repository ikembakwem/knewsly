import Head from "next/head";
import {
  ArticlesContainer,
  SectionTitle,
} from "../components/styles";
import { ArticleCard } from "../components/ArticleCard";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/loaders";

const API_KEY = process.env.API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=sports`;

export default function Home({ result }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(result);
    setLoading(false);
  }, [result]);

  if (loading) {
    return (
      <ArticlesContainer>
        <SectionTitle>Top Business News</SectionTitle>
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
        <SectionTitle>Top Business News</SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        {data.slice(0, 5).map((data) => (
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
  const data = await fetch(url, {
    headers: new Headers({
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
    }),
  });

  const res = await data.json();
  const { articles: result } = res;
  return {
    props: { result },
  };
}
