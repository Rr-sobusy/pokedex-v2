export async function getPokemonImage(pokemonNameOrId: number | string) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
  ).then((res) => res.json());
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return { pokemonImg };
}
