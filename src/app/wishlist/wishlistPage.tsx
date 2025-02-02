"use client";

import WishlistCard from "@/components/WishlistCard";
import Footer2 from "@/components/Footer2";
import React from "react";
import { useAppSelector } from "../store/hooks";

const WishlistPage = () => {
  const wishlistArray = useAppSelector((state) => state.wishlist);
  return (
    <>
      <h1 className="text-[#252B42] text-3xl font-bold text-center my-14">
        Your Wishlist
      </h1>
      <div className="py-12 flex flex-col items-center bg-[#FAFAFA]">
        {wishlistArray.length > 0 ? (
          <WishlistCard />
        ) : (
          <div className="bg-[#fff] sm:w-fit w-[320px] my-10 p-10 rounded-lg shadow-lg border-t-4 border-t-[#23A6F0] text-center">
            <h2 className="text-[#252B42] text-3xl font-bold">
              Your wishlist is empty!
            </h2>
            <p className="text-lg text-[#252B42] mt-4">
              Add items you love here!
            </p>
          </div>
        )}
      </div>
      <Footer2 />
    </>
  );
};

export default WishlistPage;
