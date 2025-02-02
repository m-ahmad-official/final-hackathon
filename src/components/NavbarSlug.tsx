"use client";
import { useAppSelector } from "@/app/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Session as AuthSession } from "@auth/core/types";
import { signOutHome } from "@/app/actions/signOutHome";
import clsx from "clsx";

interface NavbarLight1Props {
  session: AuthSession | null;
  signOutHome: () => Promise<void>;
}

export default function NavbarLight2({ session }: NavbarLight1Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const cart = useAppSelector((state) => state.cart);
  const wishlist = useAppSelector((state) => state.wishlist);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleSignOut = async () => {
    await signOutHome();
  };

  return (
    <>
      <div className="flex justify-center shadow-md">
        <div className="flex sm:w-[1090px] w-full justify-between items-center h-[78px] px-6">
          <div className="sm:pl-8">
            <h3 className="font-bold text-[24px] text-[#252B42]">
              <a href="/">Bandage</a>
            </h3>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="flex">
            <button
              className="max-sm:block hidden px-[11px]"
              onClick={toggleMenu}
            >
              <Image src="/menu.svg" alt="Menu" width={24} height={14} />
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-between w-[780px]">
            <ul className="flex gap-[15px]">
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/">Home</a>
              </li>
              <li className="flex gap-[10px] text-[14px] font-medium text-[#252B42]">
                <a href="/shop">Shop</a>
                <Image
                  src="/chevron-down.svg"
                  alt="Chevron Down"
                  width={10}
                  height={21}
                />
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/about">About</a>
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="#">Blog</a>
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-[14px] font-bold text-[#737373]">
                <a href="/product">Products</a>
              </li>
            </ul>
            <div className="text-[14px] font-bold text-[#23A6F0] ml-28">
              <div className="flex gap-[5px] p-[15px] rounded-[37px] group">
                <div className="flex flex-col">
                  {session?.user ? (
                    <form onClick={handleSignOut}>
                      <p className="cursor-pointer">Logout</p>
                      <div className="bg-[#23A6F0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </form>
                  ) : (
                    <Link
                      href={"/login"}
                      className="bg-[#23A6F0] text-white px-4 py-2 rounded"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <ul className="flex justify-between w-[160px]">
              <li>
                <a href="#">
                  <div className="flex gap-[5px] p-[15px] rounded-[37px] hover:bg-[#f2f2f2] transition-all duration-300">
                    <Image
                      src="/search.svg"
                      alt="Search"
                      width={16}
                      height={16}
                    />
                  </div>
                </a>
              </li>
              <li>
                <Link href={"/cart"}>
                  <div className="py-[15px] px-[18px] rounded-[37px] hover:bg-[#f2f2f2] transition-all duration-300">
                    <label tabIndex={0} role="button">
                      <div className="indicator">
                        <Image
                          src="/cart.svg"
                          alt="Cart"
                          width={16}
                          height={16}
                        />
                        <span className="bg-[#23A6F0] text-[#fff] text-[12px] font-bold rounded-3xl badge-sm indicator-item">
                          {totalItems}
                        </span>
                      </div>
                    </label>
                  </div>
                </Link>
              </li>
              <li>
                <a href="/wishlist">
                  <div className="flex gap-[5px] p-[15px] rounded-[37px] hover:bg-[#f2f2f2] transition-all duration-300">
                    <label tabIndex={0} role="button">
                      <div className="indicator">
                        <Image
                          src="/heart.svg"
                          alt="Heart"
                          width={16}
                          height={16}
                        />
                        {wishlist.length > 0 && (
                          <span className="bg-[#23A6F0] text-[#fff] text-[12px] font-bold rounded-3xl badge-sm indicator-item">
                            {wishlist.length}
                          </span>
                        )}
                      </div>
                    </label>
                  </div>
                </a>
              </li>
            </ul>
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
        <div className="bg-[#fafafa] flex flex-col gap-16 h-full p-8 w-[75%]">
          <div className="text-[#737373] text-2xl" onClick={closeMenu}>
            &#10005;
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
                href="/shop"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Blog
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
            <li>
              <a
                href="/product"
                className="text-lg font-medium text-[#737373]"
                onClick={closeMenu}
              >
                Products
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-10">
            <li>
              <div className="flex items-center gap-[5px]">
                <p className="text-2xl font-medium text-[#23A6F0]">
                  {session?.user ? (
                    <form onClick={handleSignOut}>
                      <p className="cursor-pointer">Logout</p>
                      <div className="bg-[#23A6F0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </form>
                  ) : (
                    <Link
                      href={"/login"}
                      className="bg-[#23A6F0] text-white px-4 py-2 rounded"
                    >
                      Login
                    </Link>
                  )}
                </p>
              </div>
            </li>
            {/* <li>
              <div>
                <Image src="/search.svg" alt="Search" width={24} height={24} />
              </div>
            </li> */}
            <div className="flex gap-8">
              <li>
                <Link href={"/cart"}>
                  <label tabIndex={0} role="button">
                    <div className="indicator flex">
                      <Image
                        src="/cart.svg"
                        alt="Cart"
                        width={24}
                        height={24}
                      />
                      <span className="bg-[#23A6F0] text-[#fff] text-[14px] font-bold badge badge-sm indicator-item">
                        {totalItems}
                      </span>
                    </div>
                  </label>
                </Link>
              </li>
              <li>
                <a href="/wishlist">
                  <label tabIndex={0} role="button">
                    <div className="indicator">
                      <Image
                        src="/heart.svg"
                        alt="Heart"
                        width={24}
                        height={24}
                      />
                      {wishlist.length > 0 && (
                        <span className="bg-[#23A6F0] text-[#fff] text-[12px] font-bold rounded-3xl badge-sm indicator-item">
                          {wishlist.length}
                        </span>
                      )}
                    </div>
                  </label>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
