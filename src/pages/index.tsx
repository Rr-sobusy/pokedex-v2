import Head from "next/head";
import Header from "@/components/header/header";
import PokeCard from "@/components/pokemon-card/card";
import { usePokemon } from "@/hooks/usePokemon";
import { pokemonGeneration } from "@/contexts/pokemons-gen";
import { searchPokemon } from "@/contexts/pokemon-search";
import Image from "next/image";

export default function Home() {
  //* context
  const { selectedGeneration } = pokemonGeneration();
  const { pokemonName: searchedPokemon } = searchPokemon();

  //* Custom pokemon hook
  const [pokemon, isLoading] = usePokemon({ generation: selectedGeneration });

  //TODO: Filter the pokemon list if not null depends on what inputted in textbox
  const filterSearchedPokemon = pokemon?.filter(({ pokemonName }) =>
    pokemonName.toLowerCase().includes(searchedPokemon.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>React Pokedex</title>
      </Head>
      <Header />
      {isLoading ? (
        <main className="w-full h-screen flex flex-col items-center">
          <Image
            className="mt-10 animate-ping"
            alt=""
            width={75}
            height={75}
            src="/pokeball_large.png"
          />
          <p className="text-slate-600 tracking-wider font-sans text-lg font-semibold mt-10">
            Fetching Pokemons . . .
          </p>
        </main>
      ) : (
        <main className="lg:max-w-[1200px] py-10 max-w-full px-[2rem] lg:mx-auto min-h-screen grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {filterSearchedPokemon?.map((pokemon) => (
            <PokeCard
              key={pokemon.pokemonId}
              pokemonId={pokemon.pokemonId}
              pokemonName={pokemon.pokemonName}
              type={pokemon.type}
            />
          ))}
        </main>
      )}
    </>
  );
}
