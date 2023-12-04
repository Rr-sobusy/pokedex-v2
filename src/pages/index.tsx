import Head from "next/head";
import Header from "@/components/header/header";
import CardContainer from "@/components/card-container/container";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Pokedex</title>
      </Head>
      <Header />
      <CardContainer />
    </>
  );
}
