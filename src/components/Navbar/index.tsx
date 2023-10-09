import { Brands } from "@nodewave/config/images/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState
import Button from "../Button";

const Navbar = () => {
  // State untuk mengontrol visibilitas menu pada layar kecil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk menoggle visibilitas menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent p-10 absolute w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="#">
              <Image src={Brands} alt="brands-logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            {/* Menu pada layar besar */}
            <Link href="/about" legacyBehavior>
              <a className="text-white font-medium text-lg">Website</a>
            </Link>
            <Link href="/kontak" legacyBehavior>
              <a className="text-white font-medium text-lg">Mobile Apps</a>
            </Link>
            <Link href="/kontak" legacyBehavior>
              <a className="text-white font-medium text-lg">Portfolio</a>
            </Link>
            <Link href="/kontak" legacyBehavior>
              <Button teks={"Make an App"} />
            </Link>
          </div>
          {/* Tombol hamburger untuk layar kecil */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
        {/* Menu dropdown pada layar kecil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="bg-white py-5  flex flex-col space-y-2 text-primary-0 justify-center items-center z-30 rounded-md ">
              <Link href="/about" legacyBehavior>
                <a className="text-gray-600">Website</a>
              </Link>
              <Link href="/kontak" legacyBehavior>
                <a className="text-gray-600">Mobile Apps</a>
              </Link>
              <Link href="/kontak" legacyBehavior>
                <a className="text-gray-600">Portfolio</a>
              </Link>
              <Link href="/kontak" legacyBehavior>
                <Button teks={"Make an App"} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
