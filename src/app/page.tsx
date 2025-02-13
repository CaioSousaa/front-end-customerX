"use client";

import Image from "next/image";
import imageMainSVG from "../../public/image-main.svg";
import logoPNG from "../../public/cx-logo.png";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Github } from "@/components/GithubButton";
import { LuBuilding2 } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex h-mainColorSpace w-mainColorSpace items-center justify-center bg-bg">
        <Image
          src={imageMainSVG}
          alt=""
          className="h-mainColorSpace w-mainColorSpace"
        />
      </main>
      <div className="flex-grow bg-rigthMain px-20 py-24">
        <div className="pb-14">
          <Image src={logoPNG} alt="logo" className="mb-20 h-14 w-36" />
          <span className="pb-10 text-3xl text-gray-200">Acesse sua conta</span>
        </div>

        <Input description="E-mail" placeholder="Seu E-mail" type="email" />
        <Input description="Senha" placeholder="Sua senha" type="password" />

        <a
          href="#"
          className="px-2 text-sm font-medium text-purple-400 transition-colors duration-200 hover:text-purple-300"
        >
          Esqueci minha senha
        </a>

        <Button text="Entrar" />
        <Github text="Ou se preferir" />

        <div className="mx-2 mb-2 mt-10 border-t-0.5 border-zinc-400" />

        <div className="duration-400 fle group mx-2 flex h-24 w-96 items-center justify-between bg-indigo-950 shadow-md transition-colors hover:bg-indigo-900">
          <div className="flex items-center gap-3">
            <LuBuilding2 className="ml-4 h-8 w-8 text-bg transition-colors duration-200 group-hover:text-purple-400" />
            <div className="grid">
              <span className="text-sm font-medium text-zinc-300 transition-colors duration-200 group-hover:text-zinc-100">
                Não tem uma conta?
              </span>
              <span className="text-sm font-medium text-bg transition-colors duration-200 group-hover:text-purple-400">
                Se increva gratuitamente
              </span>
            </div>
          </div>
          <FaChevronRight className="mr-4 h-4 w-4 text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200" />
        </div>
      </div>
    </div>
  );
}
