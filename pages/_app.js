import Layout from "./layout/Layout";
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
