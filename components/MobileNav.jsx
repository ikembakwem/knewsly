import styled from "@emotion/styled";

const MobileNav = () => {
  return <Wrapper>knewsly</Wrapper>;
};

export default MobileNav;

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 0",
  height: "60px",
  fontSize: "24px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "-0.8px",
  color: "#dca946",
  lineHeight: 1,
  borderBottom: "2px solid #f1f1f1",
  "@media (min-width: 1100px)": {
    display: "none",
  },
});
