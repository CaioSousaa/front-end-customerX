"use client";

import Image from "next/image";
import imageMainSVG from "../../../public/image-main.svg";
import logoPNG from "../../../public/cx-logo.png";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Github } from "@/components/GithubButton";
import { useState } from "react";
import { api } from "@/services/api";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/customer", {
        fullname,
        email,
        password,
      });

      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit}>
          <Input
            description="Nome completo"
            placeholder="Seu nome completo"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            description="E-mail"
            placeholder="Seu E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            description="Senha"
            placeholder="Sua senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text={loading ? "Enviando..." : "Cadastre-se gratuitamente"}
            type="submit"
            disabled={loading}
          />
        </form>
        <Github text="Ou se preferir" />
      </div>
    </div>
  );
}
