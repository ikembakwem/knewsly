import Head from "next/head";
import BusinessNews from "./business";

const API_KEY = process.env.API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&category=sports`;

export default function Home({ result }) {
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
      <BusinessNews articlesLength="7" />
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
