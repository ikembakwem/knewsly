export const fetcher = async (category) => {
  const API_KEY = process.env.API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

  const data = await fetch(url, {
    headers: new Headers({
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
    }),
  });

  const res = await data.json();
  const { articles: result } = res;

  return result;
};

export default fetcher;
