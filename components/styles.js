import styled from "@emotion/styled";

export const ArticlesContainer = styled.div({
  width: "90%",
  marginLeft: "5%",
  minHeight: "80%",
  position: "relative",
  "@media (min-width: 700px)": {
    maxWidth: "calc(100vw - 380px)",
    marginLeft: "30px",
  },
  "@media (min-width: 1100px)": {
    width: "calc(100vw -210px - 360px)",
    marginLeft: "210px",
  },
});

export const Content = styled.article({
  position: "relative",
  marginTop: "1em",
  marginBottom: "1.42em",
  borderTop: "2px solid #f1f1f1",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  transition: "all 0.2s ease",
  opacity: 1,
  paddingTop: "1.425em",
  ":hover": {
    opacity: 0.8,
  },
});

export const HeaderWrapper = styled.header({
  flexBasis: "69%",
  "@media (min-width: 850px)": {
    flexBasis: "28%",
    minWidth: 0,
  },
});

export const CategoryTitle = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 7px;
  color: #00d301;
  ${({ feat }) =>
    feat &&
    `padding-top: 3px; font-size: 1.125rem; font-weight: 600;`}
`;

export const ArticleTitle = styled.h2({
  fontSize: "1.375rem",
  cursor: "pointer",
  marginTop: 0,
  marginBottom: "0.25em",
  fontWeight: 800,
  lineHeight: 1.09,
  letterSpacing: "-0.7px",
  color: "#000",
  "@media (min-width: 850px)": {
    marginBottom: "10px",
  },
});

export const FeaturedArticleTitle = styled(ArticleTitle)({
  "@media (min-width: 1100px)": {
    fontSize: "1.625rem",
  },
});

export const Footer = styled.div({
  fontSize: "0.8125rem",
  lineHeight: 1.54,
  color: "#777",
});

export const Author = styled.span({
  fontWeight: 700,
  color: "#333",
  lineHeight: 1.23,
});

export const Time = styled.div({
  display: "flex",
  gap: "3px",
});

export const DescriptionWrapper = styled.div({
  display: "none",
  cursor: "pointer",
  "@media (min-width: 850px)": {
    flexBasis: "32%",
    fontSize: "0.875rem",
    display: "block",
    lineHeight: 1.43,
    color: "#777",
  },
});

export const FeatureDescriptionWrapper = styled(
  DescriptionWrapper
)({
  "@media (min-width: 850px)": {
    margin: "15px 0 30px",
  },
});

export const ImageContainer = styled.div({
  flexBasis: "29%",
  cursor: "pointer",

  img: {
    width: "100%",
  },
  "@media (min-width: 850px)": {
    flexBasis: "31%",
    maxWidth: "306px",
    maxHeight: "164px",
    img: {
      height: "100%",
      objectFit: "cover",
    },
  },
});

export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  letter-spacing: -0.6px;
  margin: 15px 0;
`;

export const NavigationWrapper = styled.header({
  display: "none",
  "@media (min-width: 1100px)": {
    top: 0,
    paddingLeft: "30px",
    paddingTop: "30px",
    paddingRight: "20px",
    letterSpacing: "-.02em",
    height: "100%",
    position: "fixed",
    zIndex: 49,
    right: 0,
    left: 0,
    width: "210px",
    display: "block",
  },
  "@media (min-width: 1440px)": {
    width: "250px",
  },
});
