import { create } from "zustand";

//* Generation constants
import { GenerationType } from "@/interfaces/PokemonGenerationType";
import { GenerationList } from "@/helpers/generations";

type ContextType = {
  selectedGeneration: GenerationType;
  setSelectedGeneration: (generation: GenerationType) => void;
};

export const pokemonGeneration = create<ContextType>((set) => ({
  selectedGeneration: GenerationList[2],
  setSelectedGeneration: (generation: GenerationType) =>
    set({ selectedGeneration: generation }),
}));
