import { FaGithub } from "react-icons/fa";

export interface GithubProps {
  text: string;
}

export function Github({ text }: GithubProps) {
  return (
    <div className="h-90 flex h-12 items-center justify-between px-2">
      <span className="text-lg text-zinc-300">{text}</span>
      <button className="duration-400 flex h-12 w-64 items-center justify-center gap-3 rounded-md bg-indigo-950 shadow-md transition-colors hover:bg-indigo-900">
        <FaGithub className="h-7 w-7 text-white" />
        <span className="text-sm text-zinc-100">Entre com o github</span>
      </button>
    </div>
  );
}
