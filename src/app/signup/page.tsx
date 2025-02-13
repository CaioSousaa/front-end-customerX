"use client";

import Image from "next/image";
import imageMainSVG from "../../../public/image-main.svg";
import logoPNG from "../../../public/cx-logo.png";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Github } from "@/components/GithubButton";

export default function Signup() {
  return (
    <div className="fixed flex">
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
          <span className="pb-10 text-3xl text-gray-200">
            Cadastre-se gratuitamente
          </span>
        </div>

        <Input
          description="Nome completo"
          placeholder="Seu nome completo"
          type="text"
        />
        <Input description="E-mail" placeholder="Seu E-mail" type="email" />
        <Input description="Senha" placeholder="Sua senha" type="password" />

        <Button text="Cadastre-se gratuitamente" />
        <Github text="Ou se preferir" />
      </div>
    </div>
  );
}
