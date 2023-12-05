import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Tabs, Tab } from "@nextui-org/tabs";

import Image from "next/image";

//*utils
import { formatToThree } from "@/helpers/format-to-three";

import { useQuery } from "@tanstack/react-query";
//* hook
import { useSelectedPokemon } from "@/hooks/useSelectedPokemon";

//* Dialog context
import { pokemonDialog } from "@/contexts/pokemon-stats-dialog";

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny";

type Props = {};

const PokemonDialog = (props: Props) => {
  const { isOpen, onOpenChange, pokemonId } = pokemonDialog();

  const [pokemon, isLoading] = useSelectedPokemon({ pokemonId: pokemonId });

  const pokemonType: [] = pokemon?.types.map(
    ({ type }: { type: { name: string } }) => type.name
  );
  const pokemonAbilities:[] = pokemon?.abilities.map(({ability}:{ability:{name:string}})=>ability.name)

  return (
    <Modal 
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col justify-center items-center">
              <h3 className=" text-xl mt-2 tracking-wide text-slate-700 font-bold capitalize">
                {!isLoading && pokemon.species.name}
              </h3>
              <h5 className="text-slate-500 text-sm tracking-wider">
                {!isLoading && `#${formatToThree(pokemon.id)}`}
              </h5>
            </ModalHeader>
            <ModalBody className="lg:min-h-[400px] min-h-[650px]">
              <Image
                width={800}
                height={800}
                className={`w-full max-h-[260px] ${
                  pokemonType && pokemonType.join(" ")
                } rounded-lg h-[320px] py-[3.5rem] px-[5.5rem]`}
                alt=""
                src={`${imgSrc}/${pokemonId}.png`}
              />
              <Tabs
                className="-mx-3"
                classNames={{
                  tabContent: "group-data-[selected=true]:font-bold text-base",
                }}
                variant="underlined"
                color="default"
              >
                <Tab className="flex flex-col gap-2" title="About">
                  <div className="flex flex-row items-center">
                    <p className="basis-[25%] font-sans text-[14px] font-semibold text-slate-900">
                      Height:
                    </p>
                    <p className="basis-[75%] font-sans text-[12px] text-slate-600">
                      {`${pokemon && pokemon.height / 10} m`}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="basis-[25%] font-sans text-[14px] font-semibold text-slate-900">
                      Weight:
                    </p>
                    <p className="basis-[75%] font-sans text-[12px] text-slate-600">
                    {`${pokemon && pokemon.weight / 10} kgs.`}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="basis-[25%] font-sans text-[14px] font-semibold text-slate-900">
                      Abilities:
                    </p>
                    <p className="basis-[75%] font-sans text-[12px] capitalize text-slate-600">
                      {pokemon && pokemonAbilities.join(", ")}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="basis-[25%] font-sans text-[14px] font-semibold text-slate-900">
                      Types:
                    </p>
                    <p className="basis-[75%] font-sans text-[12px] capitalize text-slate-600">
                      {pokemonType&&pokemonType.join(", ")}
                    </p>
                  </div>
                </Tab>
                <Tab title="Stats">randy hernaz</Tab>
                <Tab title="2">This is tabe 2</Tab>
                <Tab title="3">rex</Tab>
                <Tab>rex</Tab>
              </Tabs>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PokemonDialog;
