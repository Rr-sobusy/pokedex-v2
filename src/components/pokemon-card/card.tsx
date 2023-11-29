import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { formatToThree } from "@/helpers/format-to-three";
import { PokemonType } from "@/interfaces/PokemonType";

type Props = {
  pokemon: PokemonType;
};

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

const PokeCard = ({ pokemon }: Props) => {
  return (
    <Card
      isFooterBlurred
      className="max-h-[270px] hover:-translate-y-2 cursor-pointer"
    >
      <CardBody className="flex flex-col items-center gap-1 overflow-visible bg-green-200">
        <Image
          alt=""
          width={150}
          height={150}
          className=""
          src={`${imgSrc}/${pokemon.pokemonId}.png`}
        />

        <h5 className="font-sans text-xl font-semibold tracking-wide text-center text-slate-600">
          {pokemon.pokemonName}
        </h5>

        <p className="font-sans text-sm font-semibold tracking-wide text-slate-500">
          {`#${formatToThree(pokemon.pokemonId)}`}
        </p>
      </CardBody>
    </Card>
  );
};

export default PokeCard;
