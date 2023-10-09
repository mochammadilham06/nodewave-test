import { BgDark, BgHowWeWork, Messanger } from "@nodewave/config/images/image";
import Image from "next/image";
import React from "react";

export default function HowWeWork() {
  return (
    <section className="py-20 relative">
      <div className="">
        <Image
          src={BgHowWeWork}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold pb-10">How We Work</h1>
        <div className="relative">
          <Image
            src={BgDark}
            // className="w-full h-full object-cover"
            alt="image"
          />

          <div className="flex gap-4 absolute inset-0">
            <div className="p-6">
              <Image src={Messanger} alt="chat" className="w-full h-full" />
            </div>
            <div className="py-6 space-y-4">
              <h2 className="text-xl font-semibold">Estimate</h2>
              <p className="max-w-xs font-normal">
                Estimate the cost of creating your application with us. Pricing
                is transparent at the start with a gradual payment method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
