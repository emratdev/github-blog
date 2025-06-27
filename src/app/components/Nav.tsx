import Image from 'next/image';
import React from 'react'

const Nav = () => {
  return (
    <div
      className="relative w-full h-[296px] pt-16 pb-10"
      style={{ backgroundColor: "#112131" }}
    >
      <div className="max-w-[864px] mx-auto flex flex-col items-center justify-center">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={30}
          height={20}
          className="mb-2"
        />
        <h1 className="text-blue-400 text-2xl font-bold ml-2">Github Blog</h1>
      </div>
    </div>
  );
};
  export default Nav;    