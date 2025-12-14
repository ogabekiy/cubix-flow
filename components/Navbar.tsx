import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-green-100">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-15 h-15 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">
            <Image src={'/logo.png'} width={100} height={100} alt="logo" />
          </div>
          <span className="text-[20px] font-semibold text-green-700">
            Cubix <span className="font-satisfy">flow</span>
          </span>
        </Link>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6 text-[15px] text-green-700">
          <Link href="#features" className="cursor-pointer hover:text-green-900">
            How it works
          </Link>
          <Link href="/careers" className="cursor-pointer hover:text-green-900">
            Careers
          </Link>
          <Link href={'/careers'}>
          <button className="cursor-pointer px-4 py-2 font-bold rounded-lg bg-green-600 text-white hover:bg-green-500 transition">
            Start Flow
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
