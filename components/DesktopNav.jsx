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
      <NavMenu>
        <Link href="/sports">
          <MenuItem>Sports</MenuItem>
        </Link>
        <Link href="/business">
          <MenuItem>Business</MenuItem>
        </Link>
        <Link href="/technology">
          <MenuItem>Technology</MenuItem>
        </Link>
      </NavMenu>
    </NavigationContainer>
  );
};

export default DesktopNav;

const Logo = styled.div({
  fontSize: "24px",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontStyle: "italic",
  letterSpacing: "-0.8px",
  color: "#dca946",
  lineHeight: 1,
});

const MenuItem = styled.p({
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

const NavMenu = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
});
