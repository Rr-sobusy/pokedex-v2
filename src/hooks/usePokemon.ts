/**
 * * Hooks that returned all pokemons by generation
 */

import { useQuery } from "@tanstack/react-query";
import { GenerationType } from "@/interfaces/PokemonGenerationType";

export const usePokemon = ({ generation }: { generation: GenerationType }) => {
  const { data: PokemonDatas, isLoading } = useQuery({
    queryKey: ["pokemonDatas"],
    queryFn: async () => {
      //TODO: fetch pokemon datas per generation
      const pokemonDatas = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${
          generation.newPokemons
        }&offset=${generation.totalPokemons - generation.newPokemons}`
      ).then((res) => res.json());

      //TODO: Fetch pokemon stats per generation by iterating API url of each pokemon fetched earlier
      const pokemonLists = pokemonDatas?.results.map(
        async (pokemon: { url: string }) => {
          const pokemonPromise = await fetch(pokemon.url);
          return pokemonPromise.json();
        }
      );
      return Promise.all(pokemonLists);
    },
    refetchOnWindowFocus: false,
  });
  return {
    PokemonDatas,
    isLoading,
  };
};
