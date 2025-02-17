"use client";

import Image from "next/image";
import imageMainSVG from "../../public/image-main.svg";
import logoPNG from "../../public/cx-logo.png";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Github } from "@/components/GithubButton";
import { LuBuilding2 } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { z } from "zod";
import React, { useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Use um e-mail válido por favor"),
  password: z.string().min(5, "Use uma senha com 5 digitos no minimo"),
});

export default function Singin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleCreateSession = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = schema.safeParse({ email, password });
    if (!result.success) {
      setErrors(
        result.error.errors.reduce(
          (acc, err) => ({
            ...acc,
            [err.path[0]]: err.message,
          }),
          {},
        ),
      );
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await api.post("/authentiacte", { email, password });
      console.log("Resposta da API:", res.data);

      const token = res.data.token;

      if (token) {
        localStorage.setItem("token", token);
        router.push("/home");
      }

      console.log(token);
    } catch (error: any) {
      setErrors({
        email: error.response?.data?.message || "E-mail ou senha invalida",
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
          <span className="pb-10 text-3xl text-gray-200">Acesse sua conta</span>
        </div>

        <form onSubmit={handleCreateSession}>
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
            <span className="ml-2 cursor-pointer pb-1 text-sm text-red-400 transition-colors duration-200 hover:text-red-300">
              {errors.password}
            </span>
          )}

          <a
            href="#"
            className={`px-2 text-sm font-medium text-purple-400 transition-colors duration-200 hover:text-purple-300 ${
              errors.password ? "mt-2 block" : ""
            }`}
          >
            Esqueci minha senha
          </a>

          <Button
            text={loading ? "Logando..." : "Entrar"}
            type="submit"
            disabled={loading}
          />
        </form>

        <Github text="Ou se preferir" />

        <div className="mx-2 mb-2 mt-10 border-t-0.5 border-zinc-400" />

        <Link href="/signup">
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
        </Link>
      </div>
    </div>
  );
}
