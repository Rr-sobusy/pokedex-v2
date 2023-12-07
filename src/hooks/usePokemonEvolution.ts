import { useQuery } from "@tanstack/react-query";

async function getEvolutionChain(url:string) {
    const response = await fetch(url).then(res=>res.json());
    const chain = response.chain;

    const result = [chain.species.name];

    if (chain.evolves_to && chain.evolves_to.length > 0) {
        for (const evolution of chain.evolves_to) {
            const subEvolutionChain = await getEvolutionChain(evolution.species.url);
            result.push(...subEvolutionChain);
        }
    }
    return result;
}


export const usePokemonEvolution = ({pokemonId}:{pokemonId:number}) => {
  const pokemons = useQuery({
    queryKey: ["pokemonId", pokemonId],
    queryFn : async ()=>{
        const pokemonGen = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`).then(res=>res.json())
    
        const pokemonEvo = await fetch(pokemonGen.evolution_chain.url).then(res=>res.json())
        
        return getEvolutionChain(`https://pokeapi.co/api/v2/evolution-chain/1/`)
        
    }
  });

  return [pokemons]
};
