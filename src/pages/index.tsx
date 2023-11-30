import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header/header";
import PokeCard from "@/components/pokemon-card/card";
import { usePokemon } from "@/hooks/usePokemon";

export default function Home() {
  const pokemon = usePokemon({
    generation: {
      generation: "I",
      newPokemons: 151,
      totalPokemons: 151,
    },
  });
  console.log(pokemon.PokemonDatas);
  return (
    <>
      <Head>
        <title>React Pokedex</title>
      </Head>
      <Header />
      <main className="lg:max-w-[1200px] max-w-full px-[2rem] lg:mx-auto min-h-[calc(100vh/2)] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {pokemon.PokemonDatas?.map(({ id, forms }) => (
          <PokeCard pokemonId={id} pokemonName={forms[0].name} />
        ))}
      </main>
    </>
  );
}
