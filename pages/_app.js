import DesktopNav from "../components/DesktopNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DesktopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
