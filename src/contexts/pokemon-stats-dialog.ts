import { create } from "zustand";

type ContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
  pokemonId: number;
  setPokemonId: (id:number)=>void;
};

export const pokemonDialog = create<ContextType>((set) => ({
  pokemonId: 0,
  setPokemonId: (id:number)=>set({pokemonId: id}),
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onOpenChange: () => set((state) => ({ isOpen: !state.isOpen })),
}));
