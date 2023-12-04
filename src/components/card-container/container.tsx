import React from "react";
//* components
import Loader from "@/components/loader/loader";
import PokeCard from "../pokemon-card/card";

//* custom hook
import { usePokemon } from "@/hooks/usePokemon";

//* contexts
import { searchPokemon } from "@/contexts/pokemon-search";
import { pokemonGeneration } from "@/contexts/pokemons-gen";

const CardContainer = () => {
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
      {isLoading ? (
        <Loader />
      ) : (
        <main className="lg:max-w-[1200px] py-10 max-w-full px-[2rem] lg:mx-auto min-h-screen grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {filterSearchedPokemon?.map((pokemon) => (
            <PokeCard
              pokemonId={pokemon.pokemonId}
              pokemonName={pokemon.pokemonName}
              key={pokemon.pokemonId}
              type={pokemon.type}
            />
          ))}
        </main>
      )}
    </>
  );
};

export default CardContainer;
