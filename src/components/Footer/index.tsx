import { Brands } from "@nodewave/config/images/image";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 flex flex-col justify-center items-center">
      <Image src={Brands} width={200} height={200} alt="Nodewave" />
      <h3 className="py-6 font-semibold text-lg">
        PT NODEWAVE SOLUSI TEKNOLOGI
      </h3>
      <div className="text-center font-semibold text-lg">
        <p>Graha Pena Surabaya</p>
        <p>Jl. Ahmad Yani no. 88 Surabaya</p>
        <p>Phone : +62811258280</p>
        <p>Email : support@nodewave.id</p>
      </div>
    </footer>
  );
}
