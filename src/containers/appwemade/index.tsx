import {
  BasketIcons,
  BookIcons,
  CashierIcons,
  ChatIcons,
  CompanyIcons,
  ConstructIcons,
  EcommersIcons,
  ListIcons,
  WorkIcons,
} from "@nodewave/config/images/image";
import Image from "next/image";
import React from "react";

export default function AppWeMade() {
  return (
    <section className="py-20 px-10">
      <h1 className="text-3xl font-semibold pb-10 text-center">
        Applications that can be made
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-1">
          <div className="flex items-center gap-5">
            <Image src={ListIcons} width={50} height={50} alt="list-icons" />
            <h3 className="font-semibold text-xl">Online Attendance</h3>
          </div>
          <div>
            <p>
              With the times, your team may be able to work in the office or
              outside the office. Get the accuracy of your team`s work hours
              with your own company`s special online attendance feature with
              features such as:
            </p>
            <ul className="custom-list pl-5 pt-5">
              <li>Clock in and Clock Out attendance</li>
              <li>Face Photo</li>
              <li>Face Recognition</li>
              <li>Accurate time stamp down to seconds</li>
              <li>GPS location of employees</li>
            </ul>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1">
          <div className="flex items-center gap-5">
            <Image src={BasketIcons} width={50} height={50} alt="list-icons" />
            <h3 className="font-semibold text-xl">Sport Center</h3>
          </div>
          <div>
            <p>
              Create your sports center field booking application. Suitable for
              futsal, mini soccer, badminton, tennis, golf, basketball, to table
              tennis. Give your customers the freedom to
            </p>
            <ul className="custom-list pl-5 pt-5">
              <li>Choose a booking schedule</li>
              <li>Online payments</li>
              <li>Automatic scheduling system</li>
              <li>Search for Friends feature</li>
              <li>Split Payment with team members</li>
              <li>Information and announcements from you</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="flex items-center gap-5">
            <Image src={BookIcons} width={50} height={50} alt="list-icons" />
            <h3 className="font-semibold text-xl">Booking</h3>
          </div>
          <div>
            <p>
              Offer your services in your own application to place orders to
              delivery directly to the client`s house. Suitable for ac service,
              cleaning, cleaning service, CCTV, massage, and even other digital
              services. Features that can be made:
            </p>
            <ul className="custom-list pl-5 pt-5">
              <li> Memilih jenis dan kategori jasa yang dikehendaki</li>
              <li>
                Melakukan reservasi online dan pembayaran dengan metode
                pembayaran digital
              </li>
              <li>Penjadwalan dengan tim lapangan</li>
              <li>Aplikasi khusus untuk tim</li>
              Promosi dan Kode voucher khusus
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-5 flex-wrap">
        <div className="flex gap-3 items-center">
          <Image src={EcommersIcons} width={50} height={50} alt="ecommerce" />
          <h4 className="font-semibold text-xl">E-commerce</h4>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={CompanyIcons} width={50} height={50} alt="company" />
          <h4 className="font-semibold text-xl">Company Profile</h4>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={CashierIcons} width={50} height={50} alt="ecommerce" />
          <h4 className="font-semibold text-xl">Cashier</h4>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={ChatIcons} width={50} height={50} alt="ecommerce" />
          <h4 className="font-semibold text-xl">Chat</h4>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={WorkIcons} width={50} height={50} alt="ecommerce" />
          <h4 className="font-semibold text-xl">Workshop</h4>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={ConstructIcons} width={50} height={50} alt="ecommerce" />
          <h4 className="font-semibold text-xl">Construction</h4>
        </div>
        <div className="flex items-center">
          <h4 className="font-semibold text-xl">and many others</h4>
        </div>
      </div>
    </section>
  );
}
