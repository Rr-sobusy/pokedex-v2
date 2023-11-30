import {useEffect} from 'react'
import Head from "next/head";
import Header from "@/components/header/header";
import PokeCard from "@/components/pokemon-card/card";
import { usePokemon } from "@/hooks/usePokemon";
import { pokemonGeneration } from "@/contexts/pokemons-gen";


export default function Home() {

  //* context
  const { selectedGeneration } = pokemonGeneration();

  //* Custom pokemon hook
  const [pokemon, isLoading] = usePokemon();

useEffect(()=>{
    console.log(pokemon)
},[pokemon])

  console.log(selectedGeneration)
  return (
    <>
      <Head>
        <title>React Pokedex</title>
      </Head>
      <Header />
      <main className="lg:max-w-[1200px] py-10 max-w-full px-[2rem] lg:mx-auto min-h-[calc(100vh/2)] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {pokemon?.map((pokemon) => (
          <PokeCard
            key={pokemon.pokemonId}
            pokemonId={pokemon.pokemonId}
            pokemonName={pokemon.pokemonName}
            type={pokemon.type}
          />
        ))}
      </main>
    </>
  );
}
