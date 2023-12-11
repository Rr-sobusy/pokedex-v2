import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { formatToThree } from "@/helpers/format-to-three";
import { PokemonType } from "@/interfaces/PokemonType";

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

type PokemonCardType = {
  content: PokemonType;
  onClick: (id:number)=>void;
};

const PokeCard = ({ content,onClick}: PokemonCardType) => {
  return (
    <Card
      aria-label="pokemon-card"
      isFooterBlurred
      className="max-h-[290px] hover:-translate-y-2 cursor-pointer"
    >
      <CardBody
        onClick={()=>onClick(content.pokemonId)}
        className={`flex flex-col items-center gap-2 overflow-visible ${content.type.join(
          " "
        )}`}
      >
        <Image
          alt=""
          width={150}
          height={150}
          className=""
          src={`${imgSrc}/${content.pokemonId}.png`}
        />

        <h5 className="font-sans text-xl font-bold tracking-wider text-center capitalize text-slate-700">
          {content.pokemonName}
        </h5>

        <div className="flex justify-center w-full gap-1 mb-2">
          {content.type.map((pokemonType, index) => (
            <h6 key={index} className="px-3 py-1 text-[13px] font-semibold text-slate-700 font-sans h-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100">
              {pokemonType.toString()}
            </h6>
          ))}
        </div>

        <p className="absolute z-0 font-sans text-medium md:text-lg tracking-[4px] font-semibold  top-3 right-2 text-slate-600">
          {`#${formatToThree(content.pokemonId)}`}
        </p>
      </CardBody>
    </Card>
  );
};

export default PokeCard;
