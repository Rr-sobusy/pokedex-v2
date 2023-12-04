import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";

//* Dialog context
import { pokemonDialog } from "@/contexts/pokemon-stats-dialog";

const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny"

type Props = {};

const PokemonDialog = (props: Props) => {
  const { isOpen, onOpenChange , pokemonId} = pokemonDialog();

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
            <ModalHeader className="flex flex-col justify-center gap-1 text-lg font-semibold">
              {pokemonId}
            </ModalHeader>
            <ModalBody className="lg:min-h-[500px] min-h-[650px]">
              <Image
                width={800}
                height={800}
                className="w-full bg-green-100 rounded-lg h-[320px] py-[3.5rem] px-[5.5rem]"
                alt=""
                src={`${imgSrc}/${pokemonId}.png`}
              />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PokemonDialog;
