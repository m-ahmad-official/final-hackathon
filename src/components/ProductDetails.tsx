"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartToast from "./AddToCartToast";

interface ProductDetailsProps {
  data: {
    _id: string;
    title: string;
    description: string;
    price: number;
    dicountPercentage: number;
    imageUrl: string;
    productImage: {
      asset: {
        _ref: string;
      };
    };
    tags: string[];
    slug: number;
    qty: number;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  // const dispatch = useAppDispatch();
  const [cartItem] = useState({
    _id: data._id,
    title: data.title,
    price: data.price,
    dicountPercentage: data.dicountPercentage,
    imageUrl: data.imageUrl,
    slug: data.slug,
    qty: data.qty,
  });
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto py-8">
        <div className="flex justify-center bg-[#FAFAFA]">
          <div className="py-6 flex max-sm:flex-col items-center sm:w-[990px] gap-[30px]">
            <div className="flex items-center justify-center gap-[15px] py-[10px]">
              <Link
                href="/"
                className="text-[15px] font-bold text-[#252B42] hover:underline"
              >
                Home
              </Link>
              <Image
                src="/arrowRightGray.svg"
                alt="Arrow"
                width={9}
                height={16}
              />
              <h6 className="text-[14px] font-bold text-[#737373]">Shop</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#FAFAFA]">
          <div className="sm:pb-12 max-sm:pt-8 flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col max-sm:items-center sm:gap-4 gap-11">
              <div className="sm:block hidden">
                <Image
                  src={data.imageUrl}
                  alt="Product Image"
                  width={500}
                  height={400}
                  className="w-[500px] h-[480px] object-cover"
                />
              </div>
              <div className="max-sm:block hidden">
                <Image
                  src={data.imageUrl}
                  alt="Product Image"
                  width={320}
                  height={250}
                  className="w-[320px] h-[250px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 sm:p-4 justify-between max-sm:w-[350px]">
              <h4 className="text-[20px] font-medium text-[#252B42]">
                {data.title}
              </h4>
              <div className="flex gap-[10px]">
                <div className="flex gap-[5px]">
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/stars.svg" alt="Stars" width={21} height={21} />
                  <Image src="/star.svg" alt="Star" width={21} height={21} />
                </div>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  10 Reviews
                </h6>
              </div>
              <div className="flex items-center gap-3">
                {data.dicountPercentage > 0 ? (
                  <>
                    <span className="text-[20px] font-bold text-[#BDBDBD] line-through">
                      ${data.price}
                    </span>
                    <span className="text-[24px] font-bold text-[#252B42]">
                      $
                      {data.price - (data.price * data.dicountPercentage) / 100}
                    </span>
                  </>
                ) : (
                  <span className="text-[24px] font-bold text-[#252B42]">
                    ${data.price}
                  </span>
                )}
              </div>
              <div className="flex gap-[5px]">
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Availability :
                </h6>
                <h6 className="text-[14px] font-bold text-[#23A6F0]">
                  In Stock
                </h6>
              </div>
              <div className="sm:text-[12px] text-[14px] sm:font-bold font-extrabold max-sm:italic sm:text-[#737373] sm:flex items-center">
                {data.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="sm:bg-[#d1d1d1] rounded-md mr-2 sm:p-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-[#858585] sm:w-[430px] line-clamp-6">
                {data.description}
              </p>
              <hr className="border-[#BDBDBD]" />
              <div className="flex gap-[10px]">
                <Link
                  href={"#"}
                  className="rounded-[5px] py-[10px] px-[20px] bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-bold text-[#FFFFFF] hover:text-[#23A6F0] transition-all duration-200"
                >
                  Select Options
                </Link>
                <div className="relative group">
                  {/* Wishlist Button */}
                  <div className="bg-[#FFFFFF] cursor-pointer border-[1px] border-[#E8E8E8] rounded-[50%] w-10 h-10 flex justify-center items-center shadow-md hover:scale-125 duration-300 hover:text-[#E8E8E8]">
                    <svg
                      className="text-[#252B42] w-5 h-auto fill-current"
                      viewBox="0 0 530 530"
                    >
                      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                    </svg>
                  </div>
                  {/* Wishlist Hover Effect */}
                  <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-[#23A6F0] text-white px-4 py-2 rounded shadow-lg text-xs font-medium">
                      Add to Wishlist
                    </button>
                  </div>
                </div>

                <div className="relative group">
                  {/* Cart Button */}
                  {/* <button
                    onClick={() => dispatch(addToCart(cartItem))}
                    className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:scale-125 duration-300"
                  >
                    <Image
                      src="/basket.svg"
                      alt="Basket"
                      width={20}
                      height={20}
                    />
                  </button> */}
                  <AddToCartToast cartItem={cartItem} />
                  {/* Cart Hover Effect */}
                  <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-[#23A6F0] text-white px-4 py-2 rounded shadow-lg text-xs font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <Link
                  href={"/cart"}
                  className="bg-[#FFFFFF] cursor-pointer border-[1px] border-[#E8E8E8] rounded-[50%] w-10 h-10 flex justify-center items-center shadow-md hover:scale-125 duration-300 hover:text-[#E8E8E8]"
                >
                  <Image src="/more.svg" alt="More" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
