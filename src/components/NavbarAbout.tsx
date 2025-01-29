"use client";

import { useAppSelector } from "@/app/store/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Session as AuthSession } from "@auth/core/types";
import { signOutAbout } from "@/app/actions/signOutAbout";
import clsx from "clsx";

interface NavbarLight1Props {
  session: AuthSession | null;
  signOutAbout: () => Promise<void>;
}

export default function NavbarAbout({ session }: NavbarLight1Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const cart = useAppSelector((state) => state.cart);

  const handleSignOut = async () => {
    await signOutAbout();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-sm:h-[91px] flex flex-col max-sm:w-full max-sm:bg-[#F6F6F6]">
        <div className="flex sm:w-[1050px] w-full justify-between items-center py-6 max-sm:p-6">
          <h3 className="text-[24px] font-bold text-[#252B42]">
            <a href="/">Bandage</a>
          </h3>
          {/* Hamburger Menu for Mobile */}
          <div className="flex">
            <button className="max-sm:block hidden px-[11px]">
              <Image src="search2.svg" alt="Search" width={24} height={24} />
            </button>
            <Link href={"/cart"} className="max-sm:block hidden px-[11px]">
              <label tabIndex={0} role="button">
                <div className="indicator flex">
                  <Image
                    src="cart2.svg"
                    alt="Cart"
                    width={24}
                    height={24}
                    className="text-[#737373]"
                  />
                  {cart.length > 0 && (
                    <span className="bg-[#737373] text-[#fff] text-[12px] font-bold badge badge-sm indicator-item">
                      {cart.length}
                    </span>
                  )}
                </div>
              </label>
            </Link>
            <button
              className="max-sm:block hidden px-[11px]"
              onClick={toggleMenu}
            >
              <Image src="menu.svg" alt="Menu" width={24} height={14} />
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="w-[815px] hidden sm:flex justify-between items-center">
            <ul className="flex gap-[21px]">
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/">Home</a>
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/product">Product</a>
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/team">Team</a>
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="h-[52px] flex gap-[30px]">
              <button className="w-[100px] h-[52px] text-[14px] font-bold text-[#23A6F0] hover:bg-[#23A6F0] bg-[#ffffff] hover:text-[#ffffff] rounded-[5px] transition-all duration-100">
                {session?.user ? (
                  <form onClick={handleSignOut}>
                    <p className="cursor-pointer">Logout</p>
                  </form>
                ) : (
                  <Link href={"/login"}>Login</Link>
                )}
              </button>
              <button className="w-[214px] h-[52px] py-[15px] px-[25px] flex items-center justify-between bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-bold hover:text-[#23A6F0] text-[#FFFFFF] rounded-[5px] transition-all duration-100">
                Become a member
                <div className="w-3 h-[10px]">
                  <Image
                    src="arrowRightWhite.svg"
                    alt="Arrow Right"
                    width={12}
                    height={10}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed h-full w-full sm:hidden bg-black/50 top-0 left-0 transition-all ease-in-out duration-500",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="bg-[#fafafa] flex flex-col gap-20 h-full py-12 px-8 w-[75%]">
          <div className="text-[#737373] text-3xl" onClick={closeMenu}>
            &#10006;
          </div>
          <ul className="flex flex-col gap-8">
            <li>
              <a
                href="/"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="team"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
