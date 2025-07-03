import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Routers } from "../configs/router.config";
import logo from "@public/images/logo.svg";

export const Nav = () => {
  return (
    <div className="relative w-full h-[296px] pt-16 pb-10 bg-aboutBg">
      <div className="max-w-[864px] mx-auto flex flex-col items-center justify-center">
        <Link
          href={Routers.homePage}
          className="flex flex-col items-center gap-2 text-blue-400 text-2xl font-bold"
        >
          <Image src={logo} alt="logo" width={40} height={40} />
          <span>Github Blog</span>
        </Link>
      </div>
    </div>
  );
};


