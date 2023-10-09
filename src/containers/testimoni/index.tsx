import Card from "@nodewave/component/Card";
import React from "react";

export default function Testimoni() {
  return (
    <div className="p-5 lg:p-20 space-y-3">
      <h1 className="text-3xl font-semibold">Testimoni</h1>
      <div className="grid grid-cols-3 lg:flex gap-5 overflow-x-auto">
        <div className="col-span-3">
          <Card variant="white" typeOfRounded="normal" classNames="">
            <div>
              <p className="text-[#333]">
                Buat aplikasi sama tim ini emang luar biasa dicarikan solusi
                yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2
                minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima
                kasih Nodewave.
              </p>
              <h3 className="text-[#00AD98] pt-5">Ahmad Prasetyo</h3>
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card variant="white" typeOfRounded="normal" classNames="">
            <div>
              <p className="text-[#333]">
                Buat aplikasi sama tim ini emang luar biasa dicarikan solusi
                yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2
                minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima
                kasih Nodewave.
              </p>
              <h3 className="text-[#00AD98] pt-5">Ahmad Prasetyo</h3>
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card variant="white" typeOfRounded="normal" classNames="">
            <div>
              <p className="text-[#333]">
                Buat aplikasi sama tim ini emang luar biasa dicarikan solusi
                yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2
                minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima
                kasih Nodewave.
              </p>
              <h3 className="text-[#00AD98] pt-5">Ahmad Prasetyo</h3>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
