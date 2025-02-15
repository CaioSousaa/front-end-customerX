import { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export function Button(props: ButtonProps) {
  return (
    <div className="mx-2 py-8">
      <button className="h-12 w-96 items-center rounded-md bg-purple-700 transition-colors duration-300 hover:bg-bg">
        <span className="text-lg text-zinc-50">{props.text}</span>
      </button>
    </div>
  );
}
