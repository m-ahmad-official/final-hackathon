"use client";

import CartCard from "@/components/CartCard";
import Footer2 from "@/components/Footer2";
import React from "react";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const subTotal = cartArray.reduce((subTotal, arr) => {
    const price = Number(arr.price || 0);
    const discount = Number(arr.dicountPercentage || 0);
    const qty = Number(arr.qty) || 1;
    return subTotal + (price - (price * discount) / 100) * qty;
  }, 0);
  return (
    <>
      <h1 className="text-[#252B42] text-3xl font-bold text-center my-14">
        Shopping Cart
      </h1>
      <div className="bg-[#FAFAFA] flex justify-center">
        <div className="py-12 flex flex-col items-center sm:items-end">
          {cartArray.length > 0 ? (
            <>
              <CartCard />
              <div className="bg-[#fff] sm:w-fit w-[320px] my-12 p-5 rounded-lg shadow-lg border-t-4 border-t-[#23A6F0]">
                <h2 className="text-[#252B42] text-xl font-bold">
                  Order Summary
                </h2>
                <div className="divider my-3"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center font-semibold text-sm text-[#252B42]">
                    <h2>Subtotal</h2>
                    <h2>${subTotal.toFixed(2)}</h2>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-sm text-[#252B42]">
                    <h2>Delivery Charges</h2>
                    <h2>TBD</h2>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-sm text-[#252B42]">
                    <h2>Sales Tax</h2>
                    <h2>TBD</h2>
                  </div>
                </div>
                <div className="divider my-3"></div>
                <div className="flex justify-between items-center font-semibold text-base text-[#252B42]">
                  <h2 className="uppercase">estimated total</h2>
                  <h2>${subTotal.toFixed(2)}</h2>
                </div>
                <div className="divider my-3"></div>
                <div className="bg-[#23A6F0] rounded-lg hover:bg-[#fff] text-white hover:text-[#23A6F0] transition-all duration-200 flex justify-center">
                  <button className="uppercase font-bold py-3 px-6">
                    proceed to checkout
                  </button>
                </div>
                <div className="divider my-3"></div>
                <p className="text-[13px] text-[#252B42] font-semibold italic text-center">
                  {`* Delivery Charges and the Sales Tax will be calculated at Checkout
              Page`}
                </p>
              </div>
            </>
          ) : (
            <div className="bg-[#fff] sm:w-fit w-[320px] my-10 p-10 rounded-lg shadow-lg border-t-4 border-t-[#23A6F0] text-center">
              <h2 className="text-[#252B42] text-3xl font-bold">
                Your cart is empty!
              </h2>
              <p className="text-lg text-[#252B42] mt-4">
                Add items to your cart to get started!
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default CartPage;
