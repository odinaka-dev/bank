"use client";

import FintechImagge from "@/assets/img/fintech.avif";
import Image from "next/image";
import { RegisterForm } from "@/components/register-form";
import { BiLogoDigitalocean } from "react-icons/bi";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="text-blue-950 flex gap-2 items-center text-xl">
              <BiLogoDigitalocean />
              <h1>Unionly</h1>
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={FintechImagge}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
        />
      </div>
    </div>
  );
}
