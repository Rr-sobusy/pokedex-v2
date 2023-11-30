import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { formatToThree } from "@/helpers/format-to-three";
import { PokemonType } from "@/interfaces/PokemonType";

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

const PokeCard = ({ pokemonId, pokemonName, type }: PokemonType) => {
  return (
    <Card
      isFooterBlurred
      className="max-h-[270px] hover:-translate-y-2 cursor-pointer"
    >
      <CardBody
        className={`flex flex-col items-center gap-1 overflow-visible ${type.join(
          " "
        )}`}
      >
        <Image
          alt=""
          width={150}
          height={150}
          className=""
          src={`${imgSrc}/${pokemonId}.png`}
        />

        <h5 className="font-sans capitalize text-xl font-semibold tracking-wide text-center text-slate-700">
          {pokemonName}
        </h5>

        <p className="font-sans text-sm font-semibold tracking-wide text-slate-500">
          {`#${formatToThree(pokemonId)}`}
        </p>
      </CardBody>
    </Card>
  );
};

export default PokeCard;
