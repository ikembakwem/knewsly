import styled from "@emotion/styled";

// CONTAINERS
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
  cursor: "pointer",
  justifyContent: "space-between",
  transition: "all .2s ease .1s",
  opacity: 1,
  paddingTop: "1.425em",
  "@media (min-width: 1100px)": {
    ":hover": {
      opacity: 0.6,
    },
  },
});

export const HeaderContainer = styled.header({
  flexBasis: "69%",
  "@media (min-width: 850px)": {
    flexBasis: "28%",
    minWidth: 0,
  },
});

export const ArticleHeadFooter = styled.div({
  fontSize: "0.8125rem",
  lineHeight: 1.54,
  color: "#777",
});

export const DescriptionContainer = styled.div({
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

export const FeaturedDescriptionContainer = styled(DescriptionContainer)({
  "@media (min-width: 850px)": {
    margin: "15px 0 30px",
  },
});

export const NavigationContainer = styled.header({
  display: "none",
  "@media (min-width: 1100px)": {
    top: 0,
    paddingLeft: "30px",
    paddingTop: "30px",
    paddingRight: "20px",
    letterSpacing: "-.02em",
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

export const ImageContainer = styled.div({
  flexBasis: "29%",
  cursor: "pointer",

  img: {
    width: "100%",
  },
  "@media (min-width: 850px)": {
    display: "block",
    flexBasis: "31%",
    maxWidth: "306px",
    maxHeight: "164px",
    img: {
      height: "100%",
      objectFit: "cover",
    },
  },
});

export const FeaturedImageContainer = styled(ImageContainer)({
  marginBottom: "15px",
  "@media (min-width: 850px)": {
    order: 2,
    flexBasis: "67%",
    maxWidth: "708px",
    maxHeight: "350px",
  },
});

// TYPOGRAPHY
export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  letter-spacing: -0.6px;
  margin: 15px 0;
  color: #0052ff;
  cursor: pointer;
`;

export const CategoryTitle = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 7px;
  color: #00d301;
  ${({ feat }) =>
    feat &&
    `padding-top: 3px; font-size: 1.125rem; font-weight: bold; text-transform: uppercase;`}
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

// UTILS
export const Author = styled.span({
  fontWeight: 700,
  color: "#333",
  lineHeight: 1.23,
});

export const Time = styled.div({
  display: "flex",
  gap: "3px",
});

// V.2
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 1rem 3rem;
  color: white;
  background-color: #ef4444;
  transition: all 0.2s ease;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 255, 0.5);
  }
`;

// V.1
export const Button2 = styled.button({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.375rem",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  padding: "1rem 3rem",
  color: "white",
  backgroundColor: "#ef4444",
  transition: "all .2s ease",
  ":focus": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  },
});

export const MenuItem = styled.p({
  padding: ".2em 0",
  fontSize: "1.125rem",
  lineHeight: 1.1,
  color: "#777",
  cursor: "pointer",

  "@media (min-width: 575px)": {
    marginBottom: "5px",
    width: "auto",
  },
});

export const NavMenu = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
});
