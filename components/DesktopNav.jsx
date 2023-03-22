import styled from "@emotion/styled";
import Link from "next/link";
import { NavigationContainer } from "./styles";

const DesktopNav = () => {
  return (
    <NavigationContainer>
      <Logo>
        <Link href="/">
          <a>knewsly</a>
        </Link>
      </Logo>
      <Desc>...get your sports news</Desc>
    </NavigationContainer>
  );
};

export default DesktopNav;

const Logo = styled.div({
  fontSize: "24px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "-0.8px",
  color: "#dca946",
  lineHeight: 1,
});

const Desc = styled.div({
  fontSize: "13px",
});
