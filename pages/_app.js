import DesktopNav from "../components/DesktopNav";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Knewsly - Get the latest news</title>
        <meta
          name="description"
          content="Get the latest trending news in technology, business, sports and more. Find out what new about your favorite brand"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
