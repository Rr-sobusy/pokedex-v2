import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header/header";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";


export default function Home() {
  return (
    <>
      <Head>
        <title>React Pokedex</title>
      </Head>
      <Header />
      <main className="grid min-h-screen lg:gap-8 md:gap-6 md:grid-cols-2 lg:grid-cols-3 px-[1rem] md:px-[2rem]">
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/pokeball.png"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <button >
          Notify me
        </button>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/pokeball.png"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <button >
          Notify me
        </button>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/pokeball.png"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <button >
          Notify me
        </button>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <img
        alt="Woman listing to music"
        className="object-cover w-full h-full"
        height={200}
        src="https://avante.biz/wp-content/uploads/Random-Image-Wallpapers/Random-Image-Wallpapers-025.jpg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <button >
          Notify me
        </button>
      </CardFooter>
    </Card>
      </main>
    </>
  );
}
