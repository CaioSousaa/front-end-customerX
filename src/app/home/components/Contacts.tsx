import { LiaTrashAltSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";

interface ContactsProps {
  name: string;
  email: string;
  number: number;
}

export function Contacts(props: ContactsProps) {
  return (
    <div className="pb-3">
      <div className="w-contacts border-border flex h-20 justify-between rounded-md border-0.1 bg-indigo-950">
        <div className="grid gap-1 py-2 pl-2">
          <span className="text-lg/5 font-medium text-zinc-300">
            {props.name}
          </span>
          <span className="text-sm font-medium text-zinc-300">
            {props.email}
          </span>
          <span className="text-sm font-medium text-zinc-300">
            {props.number}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <LiaTrashAltSolid className="h-8 w-8 text-red-500 transition-colors duration-200 hover:scale-105 hover:text-red-400 hover:transition-transform" />
          <FaRegEdit className="h-6 w-8 text-bg transition-colors duration-200 hover:scale-105 hover:text-purple-400 hover:transition-transform" />
        </div>
      </div>
    </div>
  );
}
