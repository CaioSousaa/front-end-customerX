"use client";

import Image from "next/image";
import imageMainSVG from "../../../public/image-main.svg";
import logoPNG from "../../../public/cx-logo.png";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Github } from "@/components/GithubButton";
import { useState } from "react";
import { api } from "@/services/api";
import { z } from "zod";

const schema = z.object({
  fullname: z.string().min(10, "Nome completo é obrigatório"),
  email: z.string().email("Use um e-mail válido por favor"),
  password: z.string().min(5, "Sua senha deve ter pelo menos 5 dígitos"),
});

export default function Signup() {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    fullname?: string;
    email?: string;
    password?: string;
  }>({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = schema.safeParse({ fullname, email, password });
    if (!result.success) {
      setErrors(
        result.error.errors.reduce(
          (acc, err) => ({ ...acc, [err.path[0]]: err.message }),
          {},
        ),
      );
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await api.post("/customer", { fullname, email, password });
      setEmail("");
      setPassword("");
      setFullName("");
    } catch (error: any) {
      setErrors({
        email: error.response?.data?.message || "Erro ao cadastrar usuário",
      });
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
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullname && (
            <span className="ml-2 cursor-pointer text-sm text-red-400 transition-colors duration-200 hover:text-red-300">
              {errors.fullname}
            </span>
          )}

          <Input
            description="E-mail"
            placeholder="Seu E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="ml-2 cursor-pointer text-sm text-red-400 transition-colors duration-200 hover:text-red-300">
              {errors.email}
            </span>
          )}

          <Input
            description="Senha"
            placeholder="Sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="ml-2 cursor-pointer text-sm text-red-400 transition-colors duration-200 hover:text-red-300">
              {errors.password}
            </span>
          )}

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
