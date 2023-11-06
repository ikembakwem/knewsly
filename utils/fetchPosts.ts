import { ArticleData } from "@components/ArticleCard";

export const fetchPosts = async (category: string) => {
  const API_KEY = process.env.API_KEY!;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  const response = await fetch(url, {
    next: { revalidate: 60 * 60 }
  });

  const data = await response.json();
  const { articles } = data;

  assertIsArticles(articles);

  return articles;
};

export default fetchPosts;

function assertIsArticles(articlesData: unknown): asserts articlesData is ArticleData[] {
  if (!Array.isArray(articlesData)) {
    throw new Error("Data returned is not posts");
  }
  if (articlesData.length === 0) {
    return;
  }

  articlesData.forEach((article) => {
    chectProp("title", "string", article);
    chectProp("publishedAt", "string", article);
    chectProp("url", "string", article);
  });
}

function chectProp(prop: keyof ArticleData, type: "string", obj: ArticleData) {
  if (prop in obj) {
    if (typeof obj[prop] !== type) {
      throw new Error(`Article ${prop} is not a ${type} type`);
    }
  } else {
    throw new Error(`Article does not have ${prop}`);
  }
}
