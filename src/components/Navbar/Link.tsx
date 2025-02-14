import { ElementType } from "react";

export interface LinkProps {
  description: string;
  href: string;
  icon: ElementType;
}

export function Link({ description, href, icon: Icon }: LinkProps) {
  return (
    <div className="group transition-transform hover:scale-105">
      <a href={href} className="flex gap-2">
        <span className="text-xl font-medium text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200 group-hover:shadow-sm">
          {description}
        </span>
        <Icon className="h-8 w-8 text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200 group-hover:shadow-sm" />
      </a>
    </div>
  );
}
