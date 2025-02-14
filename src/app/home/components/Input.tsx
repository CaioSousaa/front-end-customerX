"use client";

import { ElementType, useState } from "react";

interface InputProps {
  description: string;
  icon: ElementType;
  placeholder: string;
  type: string;
  iconSize: string;
}

export function Input({
  description,
  icon: ICon,
  placeholder,
  type,
  iconSize,
}: InputProps) {
  const [borderBgColor, setBorderBgColor] = useState("#18181B");

  function handleBorderColor() {
    setBorderBgColor("#935CF2");
  }

  function resetBorderColor() {
    setBorderBgColor("#18181B");
  }

  return (
    <div className="group pb-5">
      <span className="pl-1 text-zinc-300 transition-colors duration-300 group-hover:text-zinc-100">
        {description}
      </span>
      <div
        className="w-inputHome flex h-14 items-center justify-between rounded-md border bg-indigo-950 shadow-sm"
        style={{ borderWidth: "1px", borderColor: borderBgColor }}
      >
        <input
          type={type}
          className="text-md placeholder:text-md h-7 bg-transparent pl-2 text-zinc-100 outline-none placeholder:text-zinc-300 placeholder:text-opacity-90"
          placeholder={placeholder}
          onFocus={handleBorderColor}
          onBlur={resetBorderColor}
        />
        <div className="flex h-10 w-12 items-center justify-center border-l-0.5 border-zinc-200 pr-2">
          <ICon
            className={`pl text-zinc-300 ${iconSize} transition-colors duration-300 group-hover:text-zinc-100`}
          />
        </div>
      </div>
    </div>
  );
}
