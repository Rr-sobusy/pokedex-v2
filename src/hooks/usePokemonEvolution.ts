import { useQuery } from "@tanstack/react-query";
import { getPokemonImage } from "@/helpers/get-pokemonEvo-image";


export const usePokemonEvolution = ({pokemonId}:{pokemonId:number}) => {
  const pokemons = useQuery({
    queryKey: ["pokemonId", pokemonId],
    queryFn : async ()=>{

        let generatedArray = [];   
        const pokemonGen = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`).then(res=>res.json())
    
        const pokemonEvo = await fetch(pokemonGen.evolution_chain.url).then(res=>res.json())
        
        const chain = pokemonEvo.chain

        if(chain.evolves_to.length > 0){
            const pokemonEvo1 = {
                name : chain.species.name,
                image: await getPokemonImage(pokemonId)
            }

            const pokemonEvo2 = {
                name: chain.evolves_to[0].species.name,
                image: await getPokemonImage(chain.evolves_to[0].species.name)
            }

            generatedArray.push({
              pokemons: [pokemonEvo1,pokemonEvo2],
              minLevel : chain.evolves_to[0].evolution_details[0].min_level
            })

            if(chain.evolves_to[0].evolves_to.length > 0){
                const pokemonEvo3 = {
                    name: chain.evolves_to[0].evolves_to[0].species.name,
                    image : await getPokemonImage(chain.evolves_to[0].evolves_to[0].species.name)
                }

                generatedArray.push({
                  pokemons: [pokemonEvo2, pokemonEvo3],
                  minLevel : chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level
                })
            }          
        }
        return generatedArray
       

        
    }
  });

  return [pokemons]
};
