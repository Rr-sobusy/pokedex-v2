export async function getPokemonImage(pokemonId: number) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  ).then((res) => res.json());
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return pokemon
}
