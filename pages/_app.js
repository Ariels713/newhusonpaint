import Layout from "./layout/Layout";
import "tailwindcss/tailwind.css";
import MainHero from "../components/MainHero";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
