/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";
import {
  HeaderWrapper,
  CategoryTitle,
  FeaturedArticleTitle,
  FeatureDescriptionWrapper,
  Footer,
  Author,
} from "./styles";
import { DateTime } from "./DateTime";

const FeaturedArticleCard = ({ data }) => {
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
    <Wrapper>
      <FeaturedImageContainer>
        <img
          src={
            urlToImage
              ? urlToImage
              : `/images/newsImgPlaceholder.jpg`
          }
          alt="Cover image"
        />
      </FeaturedImageContainer>
      <HeaderWrapper>
        <CategoryTitle feat>{source.name}</CategoryTitle>
        <FeaturedArticleTitle>{title}</FeaturedArticleTitle>
        <FeatureDescriptionWrapper>
          {content
            ? content.length > 195
              ? `${content.substring(0, 128)}...`
              : content
            : description}
        </FeatureDescriptionWrapper>
        <Footer>
          <Author>{author}</Author>
          <DateTime date={publishedAt} />
        </Footer>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default FeaturedArticleCard;

const Wrapper = styled.div({
  position: "relative",
  marginTop: "1em",
  marginBottom: "1.425em",
  borderTop: "2px solid #f1f1f1",
  display: "flex",
  flexWrap: "wrap",
  cursor: "pointer",
  justifyContent: "space-between",
  transition: "all .2s ease .1s",
  ":hover": {
    opacity: 0.6,
  },
});

const FeaturedImageContainer = styled.div({
  marginBottom: "15px",
  img: {
    width: "100%",
  },
  "@media (min-width: 1100px)": {
    order: 2,
    display: "block",
    flexBasis: "67%",
    maxWidth: "708px",
    maxHeight: "350px",
    img: {
      height: "100%",
      objectFit: "cover",
    },
  },
});
