import DesktopNav from "../components/DesktopNav";
import Head from "next/head";
import "../styles/globals.css";
import MobileNav from "../components/MobileNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Knewsly - Get the latest news</title>
        <meta
          name="description"
          content="Get the latest trending news in sports."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopNav />
      <MobileNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
