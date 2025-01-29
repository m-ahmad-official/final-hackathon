import Product1 from "./Product1";

export default function ProductCards() {
  return (
    <div className="flex items-center justify-center">
      <div className="py-[80px] flex flex-col items-center gap-[48px] sm:gap-[80px]">
        <div className="flex flex-col items-center justify-between text-center gap-[10px] max-sm:w-[250px]">
          <h2 className="text-[20px] font-medium text-[#737373]">
            Featured Products
          </h2>
          <h3 className="text-[24px] font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[14px] font-medium text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <Product1 />
        {/* <div className="h-[2550px] sm:h-[615px] max-sm:flex-col flex gap-[30px]">
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product1"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product2"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product3"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product4"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2550px] sm:h-[615px] max-sm:flex-col flex gap-[30px]">
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product5"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product6"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product7"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <div className="max-sm:w-[328px] h-[615px] flex flex-col items-center justify-end">
              <div className="product8"></div>
              <div className="h-[188px] p-[25px] flex flex-col items-center gap-[10px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a className="text-[14px] font-bold text-[#737373]" href="/">
                  English Department
                </a>
                <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                  <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                    $16.48
                  </h5>
                  <h5 className="text-[16px] font-bold text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="w-[82px] h-[16px] flex gap-[6px]">
                  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                  <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
