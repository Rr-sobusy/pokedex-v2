import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header/header";
import PokeCard from "@/components/pokemon-card/card";



export default function Home() {
  return (
    <>
      <Head>
        <title>React Pokedex</title>
      </Head>
      <Header />
      <main className="lg:max-w-[1200px] max-w-full px-[2rem] lg:mx-auto min-h-[calc(100vh/2)] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        <PokeCard pokemon={{pokemonId: 2,pokemonName:'Bublasaur'}}  />

      </main>
    </>
  );
}
