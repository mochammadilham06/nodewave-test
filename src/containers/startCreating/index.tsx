import Button from "@nodewave/component/Button";
import {
  DiscountIcons,
  MobilePict,
  WebPict,
} from "@nodewave/config/images/image";
import Image from "next/image";
import React from "react";

export default function StartCreating() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold pb-10 text-center">
        Start Creating Websites or Mobile Apps For You Now
      </h1>
      <div className="grid grid-cols-2 gap-5 mx-14">
        <div className="col-span-2 lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden flex">
          {/* Bagian Kiri: Teks */}
          <div className="w-1/2 flex justify-center items-center flex-col">
            <h2 className="text-3xl font-semibold mb-2 text-primary-0">
              {"Website"}
            </h2>
            <p className="text-gray-600 text-primary-0">{"Start from"}</p>
            <div className="text-gray-600 text-[#717171] custom-discount relative px-4">
              {"Rp, 1.000.000"}
              <span className="absolute right-0 -top-2">
                <Image src={DiscountIcons} alt="discount-icon" />
              </span>
            </div>
            <p className="text-gray-600 text-primary-0">{"Rp, 500.000"}</p>

            <div className="pt-12">
              <Button teks="Order Now" size="large" />
            </div>
          </div>

          {/* Bagian Kanan: Gambar */}
          <div className="w-1/2">
            <Image
              src={WebPict}
              alt="Image"
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden flex">
          <div className="w-1/2 flex justify-center items-center flex-col">
            <h2 className="text-3xl font-semibold mb-2 text-primary-0">
              {"Website"}
            </h2>
            <p className="text-gray-600 text-primary-0">{"Start from"}</p>
            <div className="text-gray-600 text-[#717171] custom-discount relative px-4">
              {"Rp, 1.000.000"}
              <span className="absolute right-0 -top-2">
                <Image src={DiscountIcons} alt="discount-icon" />
              </span>
            </div>
            <p className="text-gray-600 text-primary-0">{"Rp, 500.000"}</p>

            <div className="pt-12">
              <Button teks="Order Now" size="large" />
            </div>
          </div>

          <div className="w-1/2">
            <Image
              src={MobilePict}
              alt="Image"
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
