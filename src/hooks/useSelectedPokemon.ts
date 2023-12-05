/**
 * * hook casted when clicked on pokemon card
 */
import { useQuery } from "@tanstack/react-query";

const apiUri = "https://pokeapi.co/api/v2/pokemon";

export const useSelectedPokemon = ({ pokemonId }: { pokemonId: number }) => {
  const { data: selectedPokemon, isLoading } = useQuery({
    queryKey: ["selectedPokemon", pokemonId],
    queryFn: async () => {
      const selectedPokemon = await fetch(`${apiUri}/${pokemonId}`).then(
        (res) => res.json()
      );
      return selectedPokemon;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return [selectedPokemon, isLoading] as [any, boolean];
};
