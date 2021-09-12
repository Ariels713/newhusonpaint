import Head from "next/head";
import Customers from "../components/Customers";
import Gallery from "../components/Gallery";
import MainHero from "../components/MainHero";

export default function Home() {
  return (
    <>
      <MainHero />
      <Customers />
      <Gallery />
    </>
  );
}
