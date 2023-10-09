import {
  Thumbnail4,
  Thumbnail4Content,
  Thumbnail5,
  Thumbnail5Content,
} from "@nodewave/config/images/image";
import Image from "next/image";
import React from "react";

export default function OurWorks() {
  return (
    <div className="py-10">
      <h1 className="text-center font-bold text-3xl py-5">Our Works</h1>

      <div className="grid grid-cols-2 lg:flex items-center justify-center gap-10 overflow-x-auto px-10 lg:pl-20">
        <div className="col-span-2 rounded-[14px] overflow-hidden shadow-lg w-full">
          <div className="relative">
            <div className="">
              <Image src={Thumbnail4} alt="image" className="blur-sm" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-white flex gap-3 px-2">
                <Image
                  src={Thumbnail4Content}
                  alt="image"
                  className="w-1/2 rounded-[10px]"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-center text-3xl">
                    Rayu Motor
                  </h2>
                  <p className="font-normal text-xl">
                    AC Service Workshop that has implemented online registration
                    to make it easier for consumers, mechanics, and sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-[14px] overflow-hidden shadow-lg w-full">
          <div className="relative">
            <div className="">
              <Image src={Thumbnail5} alt="image" className="" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-white flex gap-3 px-2">
                <Image
                  src={Thumbnail5Content}
                  alt="image"
                  className="w-1/2 rounded-[100x]"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-center text-3xl">
                    Rayu Motor
                  </h2>
                  <p className="font-normal text-xl">
                    AC Service Workshop that has implemented online registration
                    to make it easier for consumers, mechanics, and sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
