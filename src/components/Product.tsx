"use client";

import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const client = createClient({
  projectId: "je7jy9rs",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

interface fullProduct {
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
  slug: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<fullProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await client.fetch(`
                *[_type == "product"] {
                _id,
                title,
                description,
                price,
                dicountPercentage,
                "imageUrl": productImage.asset->url,
                "slug": slug.current,
                tags,
              }
                `);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="py-[40px] flex flex-col items-center">
      <div className="grid sm:grid-cols-4 gap-10">
        {products.map((product) => {
          return (
            <div
              key={product._id}
              className="sm:w-[240px] w-[300px] hover:scale-105 transition ease-in-out duration-300 shadow-md rounded-md overflow-hidden"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="sm:block hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width="240"
                    height="220"
                    className="h-[280px] object-cover"
                  />
                </div>
              </Link>
              <Link href={`/product/${product.slug}`}>
                <div className="max-sm:block hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width="300"
                    height="220"
                    className="h-[320px] object-cover"
                  />
                </div>
              </Link>

              <div className="flex flex-col justify-center items-center gap-4 px-4 py-6">
                <Link href={`/product/${product.slug}`}>
                  <h2 className="text-[16px] font-bold text-[#252B42]">
                    {product.title}
                  </h2>
                </Link>
                <div className="text-[14px] font-semibold text-[#737373] text-center">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="m-1 italic">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {product.dicountPercentage > 0 ? (
                    <>
                      <span
                        className={`text-[16px] font-bold text-[#BDBDBD] ${product.dicountPercentage > 0 && "line-through"}`}
                      >
                        ${product.price}
                      </span>
                      <span className="text-[16px] font-bold text-[#23856D]">
                        $
                        {product.price -
                          (product.price * product.dicountPercentage) / 100}
                      </span>
                    </>
                  ) : (
                    <span className="text-[16px] font-bold text-[#23856D]">
                      ${product.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
