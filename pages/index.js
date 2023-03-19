import Head from "next/head";
import { useEffect, useState } from "react";
import { ArticlesContainer } from "../components/styles";
import { LoadingSpinner } from "../components/loaders";
import fetcher from "../lib/fetcher";
import { SectionTitle } from "../components/styles";
import { ArticleCard } from "../components/ArticleCard";
import { FeaturedArticleCard } from "../components/FeaturedArticleCard";
import Link from "next/link";

export default function Home({ newsArray }) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsArray);
    setLoading(false);
  }, [newsArray]);

  if (loading) {
    return (
      <ArticlesContainer>
        <SectionTitle>Sports News</SectionTitle>
        <LoadingSpinner />
      </ArticlesContainer>
    );
  }

  const [sports, business, technology] = news;
  return (
    <>
      {/* Sports news section on homepage */}
      <ArticlesContainer>
        <SectionTitle>
          <Link href="/sports">
            <a>Sports</a>
          </Link>
        </SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        <FeaturedArticleCard data={sports[0]} />
        {sports.slice(1, 7).map((data) => (
          <ArticleCard key={Math.floor(Math.random() * 99999)} data={data} />
        ))}
      </ArticlesContainer>

      {/* Business news section on homepage */}
      <ArticlesContainer>
        <SectionTitle>
          <Link href="/sports">
            <a>Business</a>
          </Link>
        </SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        <FeaturedArticleCard data={business[0]} />
        {business.slice(1, 7).map((data) => (
          <ArticleCard key={Math.floor(Math.random() * 99999)} data={data} />
        ))}
      </ArticlesContainer>

      {/* Technology section on homepage */}
      <ArticlesContainer>
        <SectionTitle>
          <Link href="/sports">
            <a>Technology</a>
          </Link>
        </SectionTitle>
      </ArticlesContainer>
      <ArticlesContainer>
        <FeaturedArticleCard data={technology[0]} />
        {technology.slice(1, 7).map((data) => (
          <ArticleCard key={Math.floor(Math.random() * 99999)} data={data} />
        ))}
      </ArticlesContainer>
    </>
  );
}

export async function getServerSideProps() {
  const sports = await fetcher("sports");
  const business = await fetcher("business");
  const technology = await fetcher("technology");

  const newsArray = [sports, business, technology];

  return {
    props: {
      newsArray,
    },
  };
}
