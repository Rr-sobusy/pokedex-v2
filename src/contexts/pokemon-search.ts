/**
 * * Context for searching the pokemon in selected pokemon generation.
 */

import { create } from "zustand";

type ContextType = {
  pokemonName: string;
  setPokemonName: (pokemonName: string) => void;
};

export const searchPokemon = create<ContextType>((set) => ({
  pokemonName: "",
  setPokemonName: (pokemonName: string) =>
    set({
      pokemonName: pokemonName,
    }),
}));
