import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
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
          Search for a pokemon by name or id or use filters.
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
              placeholder="Name or number"
              className="w-full py-3 pl-1 pr-3 font-sans text-sm bg-transparent outline-none text-slate-500"
              type="text"
            />
          </div>
          <button className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700">
            <Image src="/filter.png" width={22} height={22} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
