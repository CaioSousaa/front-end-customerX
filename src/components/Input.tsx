"use client";

import { ComponentProps, useState } from "react";

export interface InputProps extends ComponentProps<"input"> {
  description: string;
  placeholder: string;
  type: string;
}

export function Input(props: InputProps) {
  const [borderBgColor, setBorderBgColor] = useState("#18181B");

  function handleBorderColor() {
    setBorderBgColor("#935CF2");
  }

  function resetBorderColor() {
    setBorderBgColor("#18181B");
  }

  return (
    <label className="flex flex-col gap-2 px-1 py-4">
      <span className="text-sm text-zinc-300">{props.description}</span>
      <div
        className="flex h-10 w-96 items-center rounded-sm border bg-indigo-950 shadow-sm"
        style={{ borderWidth: "1px", borderColor: borderBgColor }}
      >
        <input
          type={props.type}
          className="h-7 bg-transparent pl-2 text-sm text-zinc-100 outline-none placeholder:text-sm placeholder:text-zinc-300 placeholder:text-opacity-90"
          placeholder={props.placeholder}
          onFocus={handleBorderColor}
          onBlur={resetBorderColor}
        />
      </div>
    </label>
  );
}
