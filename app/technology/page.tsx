import { ArticleCard } from "@components/ArticleCard";
import fetchPosts from "@utils/fetchPosts";
import { FeaturedArticleCard } from "@components/FeaturedArticleCard";

export default async function Hone() {
  const posts = await fetchPosts("technology");

  return (
    <>
      <div className="w-11/12 mx-auto relative max-w-container px-3">
        <h2 className="text-lg tracking-tight m-4 text-indigo-700 cursor-pointer">Tech News</h2>
      </div>
      <div className="w-11/12 mx-auto relative max-w-container px-3">
        <FeaturedArticleCard data={posts[0]} />
        {posts.slice(1).map((post) => (
          <ArticleCard key={post.title} data={post} />
        ))}
      </div>
    </>
  );
}
