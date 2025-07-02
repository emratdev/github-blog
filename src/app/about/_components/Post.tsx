import Link from "next/link";
import React from "react";
import { FaCalendarDay, FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Routers } from "../../../configs/router.config";

const Post = () => {
  return (
    <div
      className="absolute top-[200px] left-1/2 transform -translate-x-1/2 w-[864px] h-[168px] bg-postBg rounded-[10px]
    shadow-md p-6"
    >
      <div className="flex flex-col justify-center h-full gap-6 ">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <Link
              href={Routers.homePage}
              className="text-blue-400 text-xs cursor-pointer flex gap-1 items-center uppercase mb-[10px]"
            >
              <span>
                <MdKeyboardArrowLeft className="w-[20px] h-[20px]" />
              </span>
              Voltar
            </Link>
            <Link href={Routers.homePage}>
              <span className="text-blue-400 text-xs cursor-pointer flex gap-1.5 items-center uppercase">
                ver no github
                <FaExternalLinkAlt className="w-[12px] h-[12px]" />
              </span>
            </Link>
          </div>
          <h1 className="text-white text-xl font-bold">
            JavaScript data types and data structures
          </h1>
          {/* Meta Info */}
          <div className="flex gap-6 mt-4 text-gray-300 text-sm">
            <span className="flex items-center gap-1.5">
              <IoLogoGithub className="opacity-70 w-[17px] h-[17px]" />
              cameronw
            </span>
            <span className="flex items-center gap-1.5">
              <FaCalendarDay className="opacity-70 w-[17px] h-[17px]" />
              Rocketseat
            </span>
            <span className="flex items-center gap-1.5">
              <IoChatbubbleOutline className="opacity-70 w-[17px] h-[17px]" />5
              comentários
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
