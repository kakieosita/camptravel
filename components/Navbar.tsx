"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul
        className={` h-full gap-12 lg:flex ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`regular-16 text-gray-50 flexCenter
           cursor-pointer pb-1.5 transition-all hover:font-bold`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className={`lg:flexCenter ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      />
    </nav>
  );
};

export default Navbar;
