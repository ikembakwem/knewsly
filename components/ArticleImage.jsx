/* eslint-disable @next/next/no-img-element */
import { ImageContainer } from "./styles";

export const ArticleImage = ({ url }) => {
  return (
    <ImageContainer>
      <img src={url} alt="Cover for post" />
    </ImageContainer>
  );
};
