import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";

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
  const pokemonAbilities: [] = pokemon?.abilities.map(
    ({ ability }: { ability: { name: string } }) => ability.name
  );
  const pokemonStats: [{ base_stat: number; stat_name: string }] = pokemon?.stats.map(
    ({ base_stat, stat }: { base_stat: number; stat: { name: string } }) => {
      return {
        base_stat: base_stat,
        stat_name: stat.name,
      };
    }
  );
  console.log(pokemonStats);

  return (
    <Modal
      hideCloseButton
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col justify-center items-center">
              <Image
                onClick={onClose}
                height={20}
                width={25}
                className="absolute left-3 cursor-pointer"
                src="/back.png"
                alt=""
              />
              <h3 className=" text-xl mt-2 tracking-wide text-slate-700 font-bold capitalize">
                {!isLoading && pokemon.species.name}
              </h3>
              <h5 className="text-slate-500 text-sm tracking-wider">
                {!isLoading && `#${formatToThree(pokemon.id)}`}
              </h5>
            </ModalHeader>
            <ModalBody className="lg:min-h-[400px] min-h-[550px]">
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
                className="mt-2"
                classNames={{
                  tabContent:
                    "group-data-[selected=true]:font-bold group-data-[selected=true]:text-slate-600 text-gray-400 text-sm font-bold",
                }}
                color="default"
                variant="solid"
              >
                <Tab title="About">
                  <Card isBlurred>
                    <CardBody className="flex flex-col gap-3">
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%] tracking-wider text-[12px] font-bold text-slate-700">
                          Height
                        </p>
                        <p className="basis-[75%] font-sans font-semibold text-[12px] text-slate-600">
                          {`${pokemon && pokemon.height / 10} m`}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%]  text-[12px] tracking-wider font-bold text-slate-700">
                          Weight
                        </p>
                        <p className="basis-[75%] font-sans font-semibold text-[12px] text-slate-600">
                          {`${pokemon && pokemon.weight / 10} kg`}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%]  text-[12px] tracking-wider font-bold text-slate-700">
                          Abilities
                        </p>
                        <p className="basis-[75%] font-sans font-semibold text-[12px] capitalize text-slate-600">
                          {pokemon && pokemonAbilities.join(", ")}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%]  text-[12px] tracking-wider font-bold text-slate-700">
                          Types
                        </p>
                        <p className="basis-[75%] font-sans font-semibold text-[12px] capitalize text-slate-600">
                          {pokemonType && pokemonType.join(", ")}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab title="Base stats">
                  <Card>
                    <CardBody className="flex flex-col gap-1">
                      {pokemonStats?.map((pokemon, key) => (
                        <div key={key} className="flex flex-row items-center">
                          <p className="basis-[35%] capitalize tracking-wider text-[12px] font-bold text-slate-700">
                            {pokemon&&pokemon.stat_name}
                          </p>
                          <p className="basis-[15%] font-sans font-semibold text-[12px] text-slate-600">
                          {pokemon&&pokemon.base_stat}
                          </p>
                          <Progress color={pokemon.base_stat < 50 ? 'danger' : 'success'} value={pokemon&&pokemon.base_stat} className="basis-[50%]" />
                        </div>
                      ))}
                    </CardBody>
                  </Card>
                </Tab>
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
