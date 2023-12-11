import { useQuery } from "@tanstack/react-query";
import { usePokemon } from "./usePokemon";
import { getPokemonImage } from "@/helpers/get-pokemonEvo-image";


export const usePokemonEvolution = ({pokemonId}:{pokemonId:number}) => {
  const pokemons = useQuery({
    queryKey: ["pokemonId", pokemonId],
    queryFn : async ()=>{

        let generatedArray = [];   
        const pokemonGen = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`).then(res=>res.json())
    
        const pokemonEvo = await fetch(pokemonGen.evolution_chain.url).then(res=>res.json())
        
        const chain = pokemonEvo.chain

        if(chain.evolution_details.length > 0){
            const pokemonEvo1 = {

            }
        }

        
    }
  });``

  return [pokemons]
};
