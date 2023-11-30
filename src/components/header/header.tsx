import React from "react";
import Image from "next/image";

//* next-ui component library
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

//* constants and types
import { GenerationList } from "@/helpers/generations";
import { GenerationType } from "@/interfaces/PokemonGenerationType";

//* context
import { pokemonGeneration } from "@/contexts/pokemons-gen";

type Props = {};

const Header = (props: Props) => {
  const { setSelectedGeneration } = pokemonGeneration();

  //
  function selectGenerationHandler(generation: GenerationType) {
    setSelectedGeneration(generation);
  }
  return (
    <header className="w-full flex flex-col items-center text-slate-700 py-[3rem] px-[1rem] md:px-[2rem]">
      <h4 className="flex items-end justify-center font-sans text-5xl font-bold tracking-wide">
        my.p
        <Image
          className="mb-1 mr-1 animate-spin"
          alt=""
          height={30}
          width={30}
          src="/pokeball1.png"
        ></Image>
        ke<span className="__dashline">dex</span>
      </h4>

      <div className="w-full md:max-w-[450px] mt-[3rem] flex flex-col gap-3">
        <p className="font-sans text-sm font-semibold text-slate-500">
          Search for a pokemon in it's generation by name or by using filters.
        </p>
        <div className="flex gap-3">
          {/* Input w/ icon */}
          <div className="bg-[#EBF3F5] rounded-lg flex items-center w-full">
            <Image
              className="basis-[10%] px-2 py-2"
              src="/search.png"
              height={35}
              width={35}
              alt=""
            />
            <input
              placeholder="Ex. Pi"
              className="w-full py-3 pl-1 pr-3 font-sans text-sm bg-transparent outline-none text-slate-500"
              type="text"
            />
          </div>
          <Popover placement="bottom">
            <PopoverTrigger>
              <button className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700">
                <Image src="/filter.png" width={22} height={22} alt="" />
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-7 py-3 bg-[var(--bg-main)] rounded-lg">
                <h1 className="text-small font-bold mb-3">Select Generation</h1>
                <ul className="grid grid-cols-3 gap-2">
                  {GenerationList.map((generation) => (
                    <li
                      onClick={() => selectGenerationHandler(generation)}
                      className="text-lg flex justify-center px-1 py-1 items-center rounded-lg font-slate-500 font-sans font-semibold cursor-pointer hover:bg-slate-200"
                      key={generation.generation}
                    >
                      {generation.generation}
                    </li>
                  ))}
                </ul>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
