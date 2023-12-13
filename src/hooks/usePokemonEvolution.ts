import { useQuery } from "@tanstack/react-query";
import { getPokemonImage } from "@/helpers/get-pokemonEvo-image";
import { pokemonEvoType } from "@/interfaces/PokemonEvoType";
import {} from '@tanstack/react-query'

export const usePokemonEvolution = ({ pokemonId }: { pokemonId: number }) => {
  const {data:pokemons} = useQuery({
    queryKey: ["pokemonId", pokemonId],
    queryFn: async ():Promise<pokemonEvoType[]> => {
      let generatedArray:pokemonEvoType[] = [];
      const pokemonGen = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
      ).then((res) => res.json());

      const pokemonEvo = await fetch(pokemonGen.evolution_chain.url).then(
        (res) => res.json()
      );

      const chain = pokemonEvo.chain;

      if (chain.evolves_to.length > 0) {
        const pokemonEvo1 = {
          name: (chain.species.name) as string,
          image: await getPokemonImage(chain.species.name),
        };

        const pokemonEvo2 = {
          name: (chain.evolves_to[0].species.name) as string,
          image: await getPokemonImage(chain.evolves_to[0].species.name),
        };

        generatedArray.push({
          pokemons: [pokemonEvo1, pokemonEvo2],
          minLevel: chain.evolves_to[0].evolution_details[0].min_level,
        });

        if (chain.evolves_to[0].evolves_to.length > 0) {
          const pokemonEvo3 = {
            name: (chain.evolves_to[0].evolves_to[0].species.name) as string,
            image: await getPokemonImage(
              chain.evolves_to[0].evolves_to[0].species.name
            ),
          };

          generatedArray.push({
            pokemons: [pokemonEvo2, pokemonEvo3],
            minLevel:
              chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
          });
        }
      }
      return generatedArray;
    },
  });

  return [pokemons] as [pokemonEvoType[]] ;
};
