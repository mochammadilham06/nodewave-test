import Button from "@nodewave/component/Button";
import { CodeIcon, IdeaIcons } from "@nodewave/config/images/image";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-start px-10">
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
    </section>
  );
};

export default HeroSection;
