import Button from "@nodewave/component/Button";
import Card from "@nodewave/component/Card";
import {
  ArrowIcons,
  ComputerIcons,
  Phone,
  PhoneMobileIcons,
} from "@nodewave/config/images/image";
import Image from "next/image";
import React, { Fragment } from "react";

function OurProduct() {
  return (
    <Fragment>
      <section className="py-10">
        <h1 className="text-white text-center font-bold text-3xl">
          Our Product
        </h1>
        <div className="flex justify-center gap-6 px-5 lg:px-20 py-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <Card variant="white" classNames="lg:mx-20" typeOfRounded="medium">
              <div className="flex gap-3 justify-center items-end">
                <PhoneMobileIcons />
                <div>
                  <h2 className="text-[#333333]">Mobile Apps</h2>
                  <p className="text-[#555555]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <ArrowIcons />
              </div>
            </Card>
            <Card variant="black" classNames="lg:mx-20" typeOfRounded="medium">
              <div className="flex gap-3 justify-center items-end">
                <ComputerIcons />
                <div>
                  <h2 className="">Website</h2>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <ArrowIcons />
              </div>
            </Card>
            <Card
              variant="white"
              typeOfRounded="medium"
              classNames="lg:hidden lg:mx-20"
            >
              <div className="flex flex-col justify-center items-center">
                <Image src={Phone} alt="phone" width={200} height={200} />
                <h1 className="text-[#333]">Mobile Apps</h1>
                <p className="text-[#555] text-center pb-5">
                  Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan
                  fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli,
                  Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat
                  dengan fitur GPS.
                </p>
                <Button teks="Pelajari Selengkapnya" />
              </div>
            </Card>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:flex">
            <Card variant="white" typeOfRounded="medium">
              <div className="flex flex-col justify-center items-center">
                <Image src={Phone} alt="phone" width={200} height={200} />
                <h1 className="text-[#333]">Mobile Apps</h1>
                <p className="text-[#555] text-center">
                  Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan
                  fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli,
                  Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat
                  dengan fitur GPS.
                </p>
                <Button teks="Pelajari Selengkapnya" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default OurProduct;
