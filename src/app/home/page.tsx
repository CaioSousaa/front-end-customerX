"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { IoPeopleOutline } from "react-icons/io5";
import { Input } from "./components/Input";
import { IoIosContact } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { Button } from "@/components/Button";
import { RiContactsBook3Line } from "react-icons/ri";
import { Contacts } from "./components/Contacts";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-gray-950/20">
      <Navbar />

      <div className="flex flex-grow flex-col items-center justify-center">
        <div className="flex h-maxHeigthForm w-maxWidthForm bg-rigthMain">
          <div className="w-1/2 pl-5">
            <div className="flex items-center gap-1 pl-2 pt-2">
              <span className="text-3xl font-medium text-zinc-100">
                Adicione um novo contato
              </span>
              <IoPeopleOutline className="h-11 w-11 text-bg" />
            </div>

            <div className="pt-10">
              <Input
                icon={IoIosContact}
                description="Primeiro nome do seu contato"
                placeholder="Primeiro nome aqui"
                type="text"
                iconSize="w-7 h-7"
              />

              <Input
                icon={IoIosContact}
                description="Segundo nome do seu contato"
                placeholder="Segundo nome aqui"
                type="text"
                iconSize="w-7 h-7"
              />

              <Input
                icon={BsTelephone}
                description="Número"
                placeholder="Número aqui"
                type="numeric"
                iconSize="w-6 h-6"
              />

              <Input
                icon={CgMail}
                description="E-mail"
                placeholder="E-mail aqui"
                type="email"
                iconSize="w-7 h-7"
              />
              <div className="flex pl-3">
                <Button text="Adicionar" />
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-5">
            <div className="flex items-center gap-2 pl-2 pt-2">
              <span className="text-3xl font-medium text-zinc-100">
                Contatos
              </span>
              <RiContactsBook3Line className="h-11 w-11 text-bg" />
            </div>

            <div className="pt-15 pl-2">
              <Contacts
                name="Maicon Silva Castro"
                email="maicon@gmail.com"
                number={859954367}
              />
              <Contacts
                name="Mariana Kessya Rocha"
                email="mari@gmail.com"
                number={859954367}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
