import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
         <Image
            className="mt-10 animate-ping"
            alt=""
            width={50}
            height={50}
            src="/pokeball_large.png"
          />
          <p className="text-slate-600 tracking-wider font-sans text-lg font-semibold mt-10">
            Fetching Pokemons . . .
          </p>
    </div>
  )
}

export default Loader