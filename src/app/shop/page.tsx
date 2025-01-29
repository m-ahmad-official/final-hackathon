import Footer2 from "@/components/Footer2";
import NavbarLight2 from "@/components/NavbarLight2";
import Product2 from "@/components/Product2";
import Image from "next/image";
import { auth } from "@/app/utils/auth";
import { signOutShop } from "@/app/actions/signOutShop";

export default async function Shop() {
  const session = await auth();
  return (
    <>
      <div className="bg-[#23856D] sm:block hidden">
        <div className="flex gap-[30px] h-[58px] items-center justify-center">
          <div className="flex gap-[10px]">
            <div className="flex gap-[5px] p-[10px] rounded-[5px] items-center">
              <Image src="contact.svg" alt="Contact" width={16} height={16} />
              <h6 className="text-[12px] font-medium text-white">
                (+92) 322668303
              </h6>
            </div>
            <div className="flex gap-[5px] p-[10px] rounded-[5px] items-center">
              <Image src="message.svg" alt="Message" width={16} height={12} />
              <h6 className="text-[12px] font-medium text-white">
                aq320647@gmail.com
              </h6>
            </div>
          </div>
          <div className="p-[10px]">
            <h6 className="text-[14px] font-bold text-white">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="flex gap-[10px] items-center p-[10px]">
            <h6 className="text-[14px] font-bold text-white">Follow Us :</h6>
            <div className="flex items-center">
              <a href="https://instagram.com/m.ahmad.official" target="_blank">
                <Image
                  className="p-[5px] gap-[10px]"
                  src="instagram.svg"
                  alt="Contact"
                  width={26}
                  height={26}
                />
              </a>
              <Image
                className="p-[5px] gap-[10px]"
                src="youtube.svg"
                alt="Youtube"
                width={26}
                height={26}
              />
              <a href="https://facebook.com/m.ahmad.official7" target="_blank">
                <Image
                  className="p-[5px] gap-[10px]"
                  src="facebook.svg"
                  alt="Facebook"
                  width={26}
                  height={26}
                />
              </a>
              <Image
                className="p-[5px] gap-[10px]"
                src="twitter.svg"
                alt="Twitter"
                width={26}
                height={26}
              />
            </div>
          </div>
        </div>
      </div>
      <NavbarLight2 session={session} signOutShop={signOutShop} />
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="py-6 flex max-sm:flex-col items-center gap-[30px]">
          <h3 className="text-[24px] font-bold text-[#252B42] py-[10px] sm:pl-9 sm:w-[510px]">
            Shop
          </h3>
          <div className="flex items-center justify-center sm:justify-end gap-[15px] py-[10px] sm:w-[510px]">
            <a href="/" className="text-[14px] font-bold text-[#252B42]">
              Home
            </a>
            <Image src="arrowRightGray.svg" alt="Arrow" width={9} height={16} />
            <h6 className="text-[14px] font-bold text-[#737373]">Shop</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col gap-[18px] max-sm:py-6 sm:gap-[15px] pb-12">
          <div className="shop1 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="girlImage flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="shop3 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="shop4 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="shop5 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex max-sm:flex-col sm:justify-between max-sm:gap-6 items-center sm:w-[1050px] p-6">
          <h6 className="text-[14px] font-bold text-[#737373]">
            Showing all 12 results
          </h6>
          <div className="flex gap-[15px] items-center">
            <h6 className="text-[14px] font-bold text-[#737373]">Views:</h6>
            <div className="p-[15px] border-[1px] border-[#ECECEC] rounded-[5px]">
              <Image src="app.svg" alt="App" width={16} height={16} />
            </div>
            <div className="p-[15px] border-[1px] border-[#ECECEC] rounded-[5px]">
              <Image src="noteTick.svg" alt="Note" width={16} height={16} />
            </div>
          </div>
          <div className="flex gap-[15px]">
            <div className="bg-[#F9F9F9] px-5 py-[10px] border-[1px] border-[#DDDDDD] rounded-[5px] flex gap-[5px]">
              <h6 className="text-[14px] font-medium text-[#737373]">
                Popularity
              </h6>
              <Image
                src="chevron-down.svg"
                alt="Chevron Down"
                width={11}
                height={14}
              />
            </div>
            <button className="px-5 py-[10px] rounded-[5px] bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-medium text-[#ffffff] hover:text-[#23A6F0] transition-all duration-200">
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col sm:gap-12 gap-20 sm:py-12 py-20">
          <Product2 />
          {/* <div className="max-sm:flex-col flex gap-[30px]">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard1"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard2"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard3"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard4"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:flex-col flex gap-[30px] max-sm:hidden">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard5"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard6"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard7"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard8"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:flex-col flex gap-[30px] max-sm:hidden">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard9"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard10"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard11"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard12"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex justify-center">
            <ul className="border-[1px] flex border-[E8E8E8] rounded-[7px]">
              <li className="border-[1px] border-[#BDBDBD] bg-[#F3F3F3] p-6">
                <a href="#" className="text-[14px] font-bold text-[#BDBDBD]">
                  First
                </a>
              </li>
              <li className="border-[1px] border-[#E9E9E9] bg-[#FFFFFF] py-6 px-5">
                <a href="#" className="text-[14px] font-bold text-[#23A6F0]">
                  1
                </a>
              </li>
              <li className="border-[1px] border-[#E9E9E9] bg-[#23A6F0] py-6 px-5">
                <a href="#" className="text-[14px] font-bold text-[#ffffff]">
                  2
                </a>
              </li>
              <li className="border-[1px] border-[#E9E9E9] bg-[#FFFFFF] py-6 px-5">
                <a href="#" className="text-[14px] font-bold text-[#23A6F0]">
                  3
                </a>
              </li>
              <li className="border-[1px] border-[#E8E8E8] bg-[#FFFFFF] p-6">
                <a href="#" className="text-[14px] font-bold text-[#23A6F0]">
                  Next
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col py-28 items-center gap-[60px] sm:gap-[30px] sm:py-[50px]">
          <Image src="client1.svg" alt="Client 1" width={153} height={34} />
          <Image src="client2.svg" alt="Client 2" width={146} height={59} />
          <Image src="client3.svg" alt="Client 3" width={152} height={75} />
          <Image src="client4.svg" alt="Client 4" width={151} height={42} />
          <Image src="client5.svg" alt="Client 5" width={151} height={62} />
          <Image src="client6.svg" alt="Client 6" width={151} height={72} />
        </div>
      </div>
      <Footer2 />
    </>
  );
}
