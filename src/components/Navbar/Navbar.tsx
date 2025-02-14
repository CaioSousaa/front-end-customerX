import Image from "next/image";
import logoPNG from "../../../public/cx-logo.png";
import { Link } from "./Link";
import { PiSignOut } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";

export function Navbar() {
  return (
    <div className="flex h-28 w-full justify-between bg-slate-950">
      <div className="w-maxWidth m-auto flex items-center justify-between">
        <Link description="Editar perfil" href="" icon={FaGear} />
        <div>
          <Image src={logoPNG} alt="logo" className="h-14 w-36" />
        </div>
        <Link description="Sign Out" href="/" icon={PiSignOut} />
      </div>
    </div>
  );
}
