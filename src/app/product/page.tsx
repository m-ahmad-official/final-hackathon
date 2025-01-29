import Footer2 from "@/components/Footer2";
import Product from "@/components/Product";
import Image from "next/image";
import { auth } from "@/app/utils/auth";
import { signOutProduct } from "@/app/actions/signOutProduct";
import NavbarLight3 from "@/components/NavbarLight3";

export default async function ProductPage() {
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
      <NavbarLight3 session={session} signOutProduct={signOutProduct} />
      <div className="flex justify-center sm:mt-10 mt-6">
        <ul className="flex max-sm:py-8 max-sm:gap-[10px]">
          <li className="sm:p-6 text-[14px] max-sm:underline font-semibold text-[#737373]">
            Description
          </li>
          <li className="sm:p-6 text-[14px] font-bold text-[#737373]">
            Additional Information
          </li>
          <li className="sm:p-6 flex gap-2">
            <p className="text-[14px] font-bold text-[#737373]">Reviews</p>
            <p className="text-[14px] font-bold text-[#23856D]">(0)</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center max-sm:hidden">
        <div className="h-[2px] w-[1040px] bg-[#ECECEC]"></div>
      </div>
      <div className="flex justify-center">
        <div className="flex max-sm:flex-col gap-[30px] sm:py-12 py-6">
          <div className="w-[328px] h-[282px] sm:h-[385px] rounded-[7px] bg-[#C4C4C433]">
            <div className="product0"></div>
          </div>
          <div className="flex flex-col gap-[30px] max-sm:py-[25px] w-[330px]">
            <h5 className="text-[24px] font-bold text-[#252B42]">
              the quick fox jumps over
            </h5>
            <div className="text-[14px] font-medium text-[#737373] flex flex-col gap-[20px]">
              <h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
              <h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
              <h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[30px]">
              <h5 className="text-[24px] font-bold text-[#252B42]">
                the quick fox jumps over
              </h5>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <h5 className="text-[24px] font-bold text-[#252B42]">
                the quick fox jumps over
              </h5>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex flex-col gap-6 py-12">
          <div className="sm:w-[1040px]">
            <h3 className="text-[24px] font-bold text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          <div className="h-[2px] sm:w-[1042px] w-[331px] bg-[#ECECEC]"></div>
          <Product />
          {/* <div className="max-sm:flex-col flex gap-[30px]">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-1"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-2"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-3"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-4"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:flex-col flex gap-[30px] max-sm:hidden">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-5"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-6"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-7"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-8"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col py-28 items-center gap-[60px] sm:gap-[30px] sm:py-[50px]">
          <Image src="client1.svg" alt="Client 1" width={153} height={50} />
          <Image src="client2.svg" alt="Client 2" width={146} height={99} />
          <Image src="client3.svg" alt="Client 3" width={152} height={109} />
          <Image src="client4.svg" alt="Client 4" width={149} height={60} />
          <Image src="client5.svg" alt="Client 5" width={151} height={92} />
          <Image src="client6.svg" alt="Client 6" width={151} height={142} />
        </div>
      </div>
      <Footer2 />
    </>
  );
}
