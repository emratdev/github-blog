import { Routers } from '@/configs/router.config';
import Link from 'next/link';
import React from 'react'

const About = () => {
  return (
    <div className="pt-[170px] pb-[264px]  max-w-[864px] mx-auto ">
      <div>
        <div className="flex justify-between align-center pb-3 ">
          <h2 className="text-header">Publicações</h2>
          <p className="text-gray-400 text-sm">6 publicações</p>
        </div>

        <input
          className="text-input w-[864px] h-[50px] px-[16px] py-[12px] bg-[#040F1A] mx-auto"
          type="text"
          placeholder="Buscar conteúdo"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <Link href={Routers .aboutPage} className=" mt-12 p-[32px]  w-[416px] h-full mx-auto bg-bg flex flex-col justify-center">
          <div className="flex justify-between  mb-5">
            <h1 className="text-h1 text-lg w-[283px]">
              JavaScript data types and data structures
            </h1>
            <p className="text-p text-sm">Há 1 dia</p>
          </div>
          <p className="text-text text-sm">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </Link>

        <div className=" mt-12 p-[32px]  w-[416px] h-full mx-auto bg-bg flex flex-col justify-center">
          <div className="flex justify-between  mb-5">
            <h1 className="text-h1 text-lg w-[283px]">
              JavaScript data types and data structures
            </h1>
            <p className="text-p text-sm">Há 1 dia</p>
          </div>
          <p className="text-text text-sm">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </div>

        <div className=" mt-12 p-[32px]  w-[416px] h-full mx-auto bg-bg flex flex-col justify-center">
          <div className="flex justify-between  mb-5">
            <h1 className="text-h1 text-lg w-[283px]">
              JavaScript data types and data structures
            </h1>
            <p className="text-p text-sm">Há 1 dia</p>
          </div>
          <p className="text-text text-sm">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </div>

        <div className=" mt-12 p-[32px]  w-[416px] h-full mx-auto bg-bg flex flex-col justify-center">
          <div className="flex justify-between  mb-5">
            <h1 className="text-h1 text-lg w-[283px]">
              JavaScript data types and data structures
            </h1>
            <p className="text-p text-sm">Há 1 dia</p>
          </div>
          <p className="text-text text-sm">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </div>

        <div className=" mt-12 p-[32px]  w-[416px] h-full mx-auto bg-bg flex flex-col justify-center">
          <div className="flex justify-between  mb-5">
            <h1 className="text-h1 text-lg w-[283px]">
              JavaScript data types and data structures
            </h1>
            <p className="text-p text-sm">Há 1 dia</p>
          </div>
          <p className="text-text text-sm">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </div>

        <div className=" mt-12 p-[32px]  w-[416px] h-full mx-auto bg-bg flex flex-col justify-center">
          <div className="flex justify-between  mb-5">
            <h1 className="text-h1 text-lg w-[283px]">
              JavaScript data types and data structures 
            </h1>
            <p className="text-p text-sm">Há 1 dia</p>
          </div>
          <p className="text-text text-sm">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </div>
      </div>
    </div>


  );
}

export default About