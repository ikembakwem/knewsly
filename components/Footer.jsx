import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const twitterLink = "https://twitter.com/ikembakwem";
const githubLink = "https://github.com/ikembakwem/knewsly";
const newsAPI = "https://newsapi.org";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Powered by{" "}
        <Link href={newsAPI}>
          <a target="_blank">News API</a>
        </Link>
      </p>
      <SocialLinks>
        <Link href={twitterLink}>
          <a target="_blank">
            <Image
              src="/images/twitter-icon.svg"
              height={32}
              width={32}
              alt="icon link to twitter"
            ></Image>
          </a>
        </Link>
        <Link href={githubLink}>
          <a target="_blank">
            <Image
              src="/images/github-mark-white.svg"
              height={32}
              width={32}
              alt="icon link to github"
            ></Image>
          </a>
        </Link>
      </SocialLinks>
      <div>© 2023 ikembakwem</div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  padding: "2rem 0",
  color: "#d5c3c3",
  backgroundColor: "#2c2c2c",
  fontSize: "14px",
  gap: "8px",
  marginTop: "16px",
  a: {
    textDecoration: "underline",
  },
  "@media (min-width: 640px)": {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "32px",
    paddingRight: "24px",
  },
  p: {
    "@media (min-width: 640px)": {
      order: 2,
    },
  },
  "@media (min-width: 1440px)": {
    paddingLeft: "130px",
    paddingRight: "122px",
  },
});

const SocialLinks = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  padding: "8px",
  img: {
    backgrounColor: "white",
  },
  "@media (min-width: 640px)": {
    order: 3,
  },
});
