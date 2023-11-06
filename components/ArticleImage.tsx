/* eslint-disable @next/next/no-img-element */

export const ArticleImage = ({ urlToImage }: { urlToImage: string }) => {
  return (
    <div className="basis-4/12 cursor-pointer lg:block lg:basis-4/12 lg:max-w-xs lg:max-h-44">
      <img src={urlToImage} alt="Cover for post" className="w-full lg:h-full object-cover" />
    </div>
  );
};
