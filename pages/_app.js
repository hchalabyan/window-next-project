import "@/styles/globals.css";
import Layout from "@/components/layout";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head></Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);
export default MyApp;
