import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsRocket } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { SlUserFollowing } from 'react-icons/sl';

const ProfileCard = () => {
  return (
    <div
      className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[864px] h-[212px] bg-[#0B1B2B] rounded-[10px]
    shadow-md p-6"
    >
      <div className="flex items-center gap-6 ">
        {/* Avatar */}
        <Image
          src="/images/avatarr.png"
          alt="avatar"
          width={120}
          height={100}
          className="rounded-lg"
        />

        {/* Name, bio */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-xl font-bold">Cameron Williamson</h2>
            <Link href="#">
              <span className="text-blue-400 text-xs cursor-pointer flex gap-1.5 items-center">
                GITHUB
                <FaExternalLinkAlt className="w-[12px] h-[12px]" />
              </span>
            </Link>
          </div>
          <p className="text-gray-400 mt-2 text-bas">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          {/* Meta Info */}
          <div className="flex gap-6 mt-4 text-gray-300 text-sm">
            <span className="flex items-center gap-1.5">
              <IoLogoGithub className="opacity-70 w-[17px] h-[17px]" />
              cameronw
            </span>
            <span className="flex items-center gap-1.5">
              <BsRocket className="opacity-70 w-[17px] h-[17px]" />
              Rocketseat
            </span>
            <span className="flex items-center gap-1.5">
              <SlUserFollowing className="opacity-70 w-[17px] h-[17px]"/>
              32 seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard