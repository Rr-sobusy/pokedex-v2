import React from "react";

//* Component library
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
import { getSumArr } from "@/helpers/get-sum-arr";

//* hook
import { useSelectedPokemon } from "@/hooks/useSelectedPokemon";
import { usePokemonEvolution } from "@/hooks/usePokemonEvolution";

//* Dialog context
import { pokemonDialog } from "@/contexts/pokemon-stats-dialog";

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny";

const PokemonDialog = () => {
  const { isOpen, onOpenChange, pokemonId } = pokemonDialog();

  const [pokemon, isLoading] = useSelectedPokemon({ pokemonId: pokemonId });

  const [poke] = usePokemonEvolution({ pokemonId: pokemonId });
  console.log(poke);

  const pokemonType: [] = pokemon?.types.map(
    ({ type }: { type: { name: string } }) => type.name
  );
  const pokemonAbilities: [] = pokemon?.abilities.map(
    ({ ability }: { ability: { name: string } }) => ability.name
  );
  const pokemonStats: [{ base_stat: number; stat_name: string }] =
    pokemon?.stats.map(
      ({ base_stat, stat }: { base_stat: number; stat: { name: string } }) => {
        return {
          base_stat: base_stat,
          stat_name: stat.name,
        };
      }
    );

  return (
    <Modal
      hideCloseButton
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={true}
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
                width={500}
                height={500}
                className={`w-full shadow-md max-h-[260px] ${
                  pokemonType && pokemonType.join(" ")
                } rounded-lg h-[320px] py-[3.5rem] px-[5.5rem]`}
                alt=""
                src={`${imgSrc}/${pokemonId}.png`}
              />
              <Tabs
                className="mt-2"
                classNames={{
                  tabContent:
                    "group-data-[selected=true]:font-bold group-data-[selected=true]:text-slate-700 text-gray-500 text-sm font-bold",
                }}
                color="default"
                variant="solid"
              >
                <Tab title="About">
                  <Card isBlurred>
                    <CardBody className="flex flex-col gap-3">
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%] tracking-widest text-[11px] font-semibold text-slate-500">
                          Height
                        </p>
                        <p className="basis-[75%] tracking-wider font-semibold text-[13px] text-slate-700">
                          {`${pokemon && pokemon.height / 10} m`}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%] tracking-widest text-[11px] font-semibold text-slate-500">
                          Weight
                        </p>
                        <p className="basis-[75%] tracking-wider font-semibold text-[13px] text-slate-700">
                          {`${pokemon && pokemon.weight / 10} kg`}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%] tracking-widest text-[11px] font-semibold text-slate-500">
                          Abilities
                        </p>
                        <p className="basis-[75%] tracking-wider font-semibold text-[13px] capitalize text-slate-700">
                          {pokemon && pokemonAbilities.join(", ")}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="basis-[25%] tracking-widest text-[11px] font-semibold text-slate-500">
                          Types
                        </p>
                        <p className="basis-[75%] tracking-wider font-semibold text-[13px] capitalize text-slate-700">
                          {pokemonType && pokemonType.join(", ")}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab title="Stats">
                  <Card className=" max-h-auto lg:max-h-[137px]">
                    <CardBody className="flex flex-col gap-2">
                      {pokemonStats?.map((pokemon, index) => (
                        <div key={index} className="flex flex-row items-center">
                          <p className="basis-[35%] tracking-widest text-[11px] font-semibold text-slate-500 capitalize">
                            {pokemon && pokemon.stat_name}
                          </p>
                          <p className="basis-[15%] tracking-wider font-semibold text-[13px] text-slate-700">
                            {pokemon && pokemon.base_stat}
                          </p>
                          <Progress
                            size="sm"
                            color={
                              pokemon.base_stat < 50 ? "danger" : "success"
                            }
                            value={pokemon && pokemon.base_stat}
                            className="basis-[50%]"
                          />
                        </div>
                      ))}
                      <div className="flex flex-row items-center">
                        <p className="basis-[35%] tracking-widest text-[11px] font-semibold text-slate-500 capitalize">
                          Total
                        </p>
                        <p className="basis-[15%] tracking-wider font-semibold text-[13px] text-slate-700">
                          {getSumArr(
                            pokemonStats &&
                              pokemonStats.map((pokemon) => pokemon.base_stat)
                          )}
                        </p>
                        <Progress
                          color={`${
                            getSumArr(
                              pokemonStats &&
                                pokemonStats.map((pokemon) => pokemon.base_stat)
                            ) > 300
                              ? "success"
                              : "danger"
                          }`}
                          size="sm"
                          maxValue={600}
                          value={getSumArr(
                            pokemonStats &&
                              pokemonStats.map((pokemon) => pokemon.base_stat)
                          )}
                          className="basis-[50%]"
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab title="Evolution">
                  <Card className="lg:min-h-[137px]">
                    <CardBody className=" grid gap-1">
                      {poke?.length > 0 ? (
                        poke.map(({ pokemons, minLevel }) => (
                          <div>
                            <div className="grid grid-cols-3 items-center justify-center">
                              <div className="grid justify-center">
                                <Image
                                  className="h-[40px] w-[60px]"
                                  height={800}
                                  width={200}
                                  alt=""
                                  src={pokemons[0]?.image.pokemonImg}
                                />
                                <p className="font-sans tracking-wide text-slate-700 font-semibold capitalize text-sm">
                                  {pokemons[0].name}
                                </p>
                              </div>
                              <p className="font-sans text-sm font-semibold flex justify-center text-slate-600">{`Min Level : ${minLevel ?  minLevel : 0}`}</p>
                              <div className="grid justify-center">
                                <Image
                                  className="h-[40px] w-[60px]"
                                  height={800}
                                  width={200}
                                  alt=""
                                  src={pokemons[1]?.image.pokemonImg}
                                />
                                <p className="font-sans tracking-wide text-slate-700 font-semibold capitalize text-sm">
                                  {pokemons[1].name}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="grid items-center justify-center text-slate-700 uppercase font-semibold">This pokemon does not evolve.</p>
                      )}
                    </CardBody>
                  </Card>
                </Tab>
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
