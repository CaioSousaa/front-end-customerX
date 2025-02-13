export interface ButtonProps {
    text: string;
}

export function Button({text}: ButtonProps) {
  return (
    <div className="mx-2 py-8">
      <button
        type="submit"
        className="h-12 w-96 items-center rounded-md bg-purple-700 transition-colors duration-300 hover:bg-bg"
      >
        <span className="text-lg text-zinc-50">{text}</span>
      </button>
    </div>
  );
}
