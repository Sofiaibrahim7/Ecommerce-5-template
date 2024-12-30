 "use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";
import { useState } from "react"; // Import useState for toggling hamburger menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <div className="w-full h-[70px] bg-white z-50 relative">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px] text-[#252b42]">Bandage</h3>

        {/* Main Navigation Links */}
        <div className="flex gap-6">
          <ul className="flex gap-6 font-Montserrat text-[14px] text-[#737373]">
            <li><Link href="/">Home</Link></li>
           {/* <li><Link href="/shop">Shop</Link></li>*/}
            <li><Link href="/components/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
            <li><Link href="/pages">ProductPage</Link></li>
          </ul>

          {/* Login and Icon Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src={user} alt="user" width={16} height={16} />
              <span className="font-Montserrat text-[14px] text-[#23A6F0]">Login / Register</span>
            </div>

            <ul className="flex gap-4 items-center">
              <li><Image src={search} alt="search" width={16} height={16} /></li>
              <li><Image src={cart} alt="cart" width={16} height={16} /></li>
              <li><Image src={mail} alt="mail" width={16} height={16} /></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px] text-[#252b42]">Bandage</h3>

        {/* Hamburger Icon */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 top-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4`}
      >
        <ul className="font-Montserrat text-white text-[14px] flex flex-col items-center gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}
