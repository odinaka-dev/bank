// import { Wallet } from "lucide-react";
import type React from "react";
import { BiLogoDigitalocean } from "react-icons/bi";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center gap-2 text-xl font-semibold ${className}`}
    >
      <div className="text-blue-950 flex gap-2 items-center text-3xl">
        <BiLogoDigitalocean />
        <h1 className="text-xl">Unionly</h1>
      </div>
    </div>
  );
};

export default Logo;
