import { removeFromWishlist } from "@/app/store/features/wishlist";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import Image from "next/image";
import React from "react";
import { toast, Bounce } from "react-toastify";

const WishlistCard = () => {
  const wishlistArray = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  const notify = (uuid: string) => {
    dispatch(removeFromWishlist(uuid));
    toast.success("Product Removed from Wishlist!", {
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
  };

  return (
    <>
      <div className="grid sm:grid-cols-3 gap-6">
        {wishlistArray.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl sm:px-6 px-16 sm:py-6 py-8 border border-gray-200 flex max-sm:flex-col max-sm:items-center gap-6 max-sm:text-center"
          >
            <Image
              className="w-40 h-52 object-cover rounded-lg"
              src={item.imageUrl}
              alt={item.title}
              width={100}
              height={100}
            />
            <div className="flex flex-col sm:items-start items-center gap-3">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-[#252B42] sm:mt-3 w-[200px]">
                  {item.title}
                </h2>
                <p className="text-base font-normal text-[#737373]">
                  Price: &#36;
                  {item.price - (item.price * item.dicountPercentage) / 100}
                </p>
              </div>
              <button
                onClick={() => notify(item.uuid as string)}
                className="bg-[#EF4444] text-white text-base font-bold px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishlistCard;
