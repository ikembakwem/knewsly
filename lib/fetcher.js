import axios from "axios";

export const fetcher = async (category) => {
  const API_KEY = process.env.API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

  const response = await axios.get(url, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  const result = await response.data.articles;

  return result;
};

export default fetcher;
