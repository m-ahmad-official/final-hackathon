"use client";

import { addToCart } from "@/app/store/features/cart";
import { useAppDispatch } from "@/app/store/hooks";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

interface CartItem {
  _id: string; // or number, depending on your data
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
    toast.success("Product Added Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div onClick={() => dispatch(addToCart(cartItem))}>
      {/* <button onClick={notify}>Notify!</button> */}
      <button
        onClick={notify}
        className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:scale-125 duration-300"
      >
        <Image src="/basket.svg" alt="Basket" width={20} height={20} />
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default AddToCartToast;
