"use client";

import { addToCart } from "@/app/store/features/cart";
import { useAppDispatch } from "@/app/store/hooks";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  dicountPercentage: number;
  imageUrl: string;
  slug: number;
  qty: number;
}

interface AddToCartToastProps {
  cartItem: CartItem;
}

const AddToCartToast: React.FC<AddToCartToastProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const notify = () =>
    toast.success("Product Added to Cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <>
      <button
        onClick={() => {
          notify();
          dispatch(addToCart(cartItem));
        }}
        className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:scale-125 duration-300"
      >
        <Image src="/basket.svg" alt="Basket" width={20} height={20} />
      </button>
    </>
  );
};

export default AddToCartToast;
