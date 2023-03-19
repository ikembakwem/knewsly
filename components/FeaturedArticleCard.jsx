/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  HeaderContainer,
  CategoryTitle,
  FeaturedArticleTitle,
  FeaturedDescriptionContainer,
  ArticleHeadFooter,
  Author,
  Content,
  FeaturedImageContainer,
} from "./styles";
import { DateTime } from "./DateTime";
import Link from "next/link";

export const FeaturedArticleCard = ({ data }) => {
  const {
    author,
    title,
    publishedAt,
    content,
    urlToImage,
    description,
    url,
    source,
  } = data;
  return (
    <Content>
      <FeaturedImageContainer>
        <img
          src={urlToImage ? urlToImage : `/images/newsImgPlaceholder.jpg`}
          alt="Cover image"
        />
      </FeaturedImageContainer>
      <HeaderContainer>
        <CategoryTitle feat>{source.name}</CategoryTitle>
        <FeaturedArticleTitle>
          <Link href={url}>
            <a target="_blank">{title}</a>
          </Link>
        </FeaturedArticleTitle>
        <FeaturedDescriptionContainer>
          {content
            ? content.length > 195
              ? `${content.substring(0, 128)}...`
              : content
            : description}
        </FeaturedDescriptionContainer>
        <ArticleHeadFooter>
          <Author>{author}</Author>
          <DateTime date={publishedAt} />
        </ArticleHeadFooter>
      </HeaderContainer>
    </Content>
  );
};
