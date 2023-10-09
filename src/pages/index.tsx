import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@nodewave/component/Navbar";
import Card from "@nodewave/component/Card";
import {
  ArrowIcons,
  BasketIcons,
  BgDark,
  BgHowWeWork,
  BookIcons,
  Brands,
  CashierIcons,
  ChatIcons,
  CodeIcon,
  CompanyIcons,
  ComputerIcons,
  ConstructIcons,
  DiscountIcons,
  EcommersIcons,
  IdeaIcons,
  ListIcons,
  Messanger,
  MobilePict,
  Phone,
  PhoneMobileIcons,
  Thumbnail4,
  Thumbnail4Content,
  Thumbnail5,
  Thumbnail5Content,
  WebPict,
  WorkIcons,
} from "@nodewave/config/images/image";
import Button from "@nodewave/component/Button";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-start px-10">
        <div className="">
          <div className="absolute inset-0 bg-hero bg-cover bg-center"></div>
        </div>
        <div className="w-full lg:w-1/2 z-10 text-white px-6">
          <Image src={CodeIcon} alt="icons" width={50} height={50} />
          <h1 className="text-2xl text-center md:text-start md:text-3xl 2xl:text-6xl font-bold flex">
            Make Your Own Website and Mobile Application With Nodewave{" "}
          </h1>
          <IdeaIcons />

          <div className="space-y-3">
            <Button teks="Get Started Now" />
            <p className="py-2 font-normal text-lg">
              Create Mobile Applications and Websites for Companies or Your
              Business Have a transparent pricing, easy and straightforward
              development process
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-16 shadow" // Menambahkan class 'shadow' di sini
          style={{
            background:
              "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>
      </div>
      {/* End of Hero Section */}

      {/* Our Product */}
      <div className="py-10">
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
      </div>
      {/* End Our Product */}

      {/* Testimoni */}
      <div className="p-5 lg:p-20 space-y-3">
        <h1 className="text-3xl font-semibold">Testimoni</h1>
        <div className="grid grid-cols-3 lg:flex gap-5 overflow-x-auto">
          <div className="col-span-3">
            <Card variant="white" typeOfRounded="normal" classNames="">
              <div>
                <p className="text-[#333]">
                  Buat aplikasi sama tim ini emang luar biasa dicarikan solusi
                  yang paling murah supaya bisa segera mulai aplikasi PPOB saya.
                  2 minggu udah jadi hasilnya saya tinggal fokus di promosi!
                  Terima kasih Nodewave.
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
                  yang paling murah supaya bisa segera mulai aplikasi PPOB saya.
                  2 minggu udah jadi hasilnya saya tinggal fokus di promosi!
                  Terima kasih Nodewave.
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
                  yang paling murah supaya bisa segera mulai aplikasi PPOB saya.
                  2 minggu udah jadi hasilnya saya tinggal fokus di promosi!
                  Terima kasih Nodewave.
                </p>
                <h3 className="text-[#00AD98] pt-5">Ahmad Prasetyo</h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* End of Testimoni */}

      {/* Our Work */}
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
                      AC Service Workshop that has implemented online
                      registration to make it easier for consumers, mechanics,
                      and sales
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
                      AC Service Workshop that has implemented online
                      registration to make it easier for consumers, mechanics,
                      and sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Work */}

      {/* How We Work */}
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
                  Estimate the cost of creating your application with us.
                  Pricing is transparent at the start with a gradual payment
                  method.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End How We Work */}

      {/* App can we made */}
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
              <Image
                src={BasketIcons}
                width={50}
                height={50}
                alt="list-icons"
              />
              <h3 className="font-semibold text-xl">Sport Center</h3>
            </div>
            <div>
              <p>
                Create your sports center field booking application. Suitable
                for futsal, mini soccer, badminton, tennis, golf, basketball, to
                table tennis. Give your customers the freedom to
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
                delivery directly to the client`s house. Suitable for ac
                service, cleaning, cleaning service, CCTV, massage, and even
                other digital services. Features that can be made:
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
            <Image
              src={ConstructIcons}
              width={50}
              height={50}
              alt="ecommerce"
            />
            <h4 className="font-semibold text-xl">Construction</h4>
          </div>
          <div className="flex items-center">
            <h4 className="font-semibold text-xl">and many others</h4>
          </div>
        </div>
      </section>

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

      {/* App can we made */}

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
    </div>
  );
}
