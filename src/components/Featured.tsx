import Image from "next/image";

export default function Featured() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-full sm:py-[112px] py-[80px] flex flex-col items-center gap-[80px]">
        <div className="flex flex-col items-center text-center justify-center gap-[10px] sm:w-[491px] w-[250px]">
          <h6 className="text-[14px] font-bold text-[#23A6F0]">
            Practice Advice
          </h6>
          <h3 className="sm:block hidden text-[40px] font-bold text-[#252B42]">
            Featured Posts
          </h3>
          <h3 className="max-sm:block hidden text-[40px] font-bold text-[#252B42]">
            Featured Products
          </h3>
          <p className="sm:block hidden text-[14px] font-normal text-[#737373] text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <p className="max-sm:block hidden text-[14px] font-medium text-[#737373] text-center">
            Problems trying to resolve the conflict between the two major
          </p>
        </div>
        <div className="flex max-sm:flex-col max-sm:w-[330px] gap-[30px] sm:gap-[10px]">
          <div className="h-[606px] flex flex-col shadow">
            <div className="featured1">
              <div className="h-[280px] sm:h-[300px]">
                <div className="w-[58px] h-[24px] px-[10px] m-5 bg-[#E74040] rounded-[3px] flex justify-center items-center">
                  <h1 className="text-[14px] font-bold text-white">NEW</h1>
                </div>
              </div>
              <div className="p-[25px] flex flex-col gap-[10px]">
                <div className="flex gap-[15px]">
                  <h6 className="text-[12px] font-normal text-[#8EC2F2]">
                    Google
                  </h6>
                  <h6 className="text-[12px] font-normal text-[#737373]">
                    Trending
                  </h6>
                  <h6 className="text-[12px] font-normal text-[#737373]">
                    New
                  </h6>
                </div>
                <h4 className="text-[20px] font-normal text-[#252B42]">
                  Loudest à la Madison #1 (Lintegral)
                </h4>
                <p className="w-[280px] text-[14px] font-normal text-[#737373]">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className="py-[15px] flex justify-between">
                  <div className="flex gap-[5px]">
                    <Image
                      src="coolicon.svg"
                      alt="Cock"
                      width={16}
                      height={16}
                    />
                    <h6 className="text-[12px] font-normal text-[#737373]">
                      22 April 2021
                    </h6>
                  </div>
                  <div className="flex gap-[5px]">
                    <Image
                      src="trading.svg"
                      alt="Trading"
                      width={16}
                      height={16}
                    />
                    <h6 className="text-[12px] font-normal text-[#737373]">
                      22 April 2021
                    </h6>
                  </div>
                </div>
                <div className="max-sm:block hidden">
                  <a href="#" className="flex items-center gap-[10px]">
                    <h6 className="text-[14px] font-bold text-[#737373]">
                      Learn More
                    </h6>
                    <Image
                      src="arrowRight.svg"
                      alt="Arrow Right"
                      width={9}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[606px] flex flex-col shadow">
            <div className="featured2">
              <div className="h-[280px] sm:h-[300px]">
                <div className="w-[58px] h-[24px] px-[10px] m-5 bg-[#E74040] rounded-[3px] flex justify-center items-center">
                  <h1 className="text-[14px] font-bold text-white">NEW</h1>
                </div>
              </div>
              <div className="p-[25px] flex flex-col gap-[10px]">
                <div className="flex gap-[15px]">
                  <h6 className="text-[12px] font-normal text-[#8EC2F2]">
                    Google
                  </h6>
                  <h6 className="text-[12px] font-normal text-[#737373]">
                    Trending
                  </h6>
                  <h6 className="text-[12px] font-normal text-[#737373]">
                    New
                  </h6>
                </div>
                <h4 className="text-[20px] font-normal text-[#252B42]">
                  Loudest à la Madison #1 (Lintegral)
                </h4>
                <p className="w-[280px] text-[14px] font-normal text-[#737373]">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className="py-[15px] flex justify-between">
                  <div className="flex gap-[5px]">
                    <Image
                      src="coolicon.svg"
                      alt="Cock"
                      width={16}
                      height={16}
                    />
                    <h6 className="text-[12px] font-normal text-[#737373]">
                      22 April 2021
                    </h6>
                  </div>
                  <div className="flex gap-[5px]">
                    <Image
                      src="trading.svg"
                      alt="Trading"
                      width={16}
                      height={16}
                    />
                    <h6 className="text-[12px] font-normal text-[#737373]">
                      22 April 2021
                    </h6>
                  </div>
                </div>
                <div className="max-sm:block hidden">
                  <a href="#" className="flex items-center gap-[10px]">
                    <h6 className="text-[14px] font-bold text-[#737373]">
                      Learn More
                    </h6>
                    <Image
                      src="arrowRight.svg"
                      alt="Arrow Right"
                      width={9}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[606px] flex flex-col shadow">
            <div className="featured3">
              <div className="h-[280px] sm:h-[300px]">
                <div className="w-[58px] h-[24px] px-[10px] m-5 bg-[#E74040] rounded-[3px] flex justify-center items-center">
                  <h1 className="text-[14px] font-bold text-white">NEW</h1>
                </div>
              </div>
              <div className="p-[25px] flex flex-col gap-[10px]">
                <div className="flex gap-[15px]">
                  <h6 className="text-[12px] font-normal text-[#8EC2F2]">
                    Google
                  </h6>
                  <h6 className="text-[12px] font-normal text-[#737373]">
                    Trending
                  </h6>
                  <h6 className="text-[12px] font-normal text-[#737373]">
                    New
                  </h6>
                </div>
                <h4 className="text-[20px] font-normal text-[#252B42]">
                  Loudest à la Madison #1 (Lintegral)
                </h4>
                <p className="w-[280px] text-[14px] font-normal text-[#737373]">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className="py-[15px] flex justify-between">
                  <div className="flex gap-[5px]">
                    <Image
                      src="coolicon.svg"
                      alt="Cock"
                      width={16}
                      height={16}
                    />
                    <h6 className="text-[12px] font-normal text-[#737373]">
                      22 April 2021
                    </h6>
                  </div>
                  <div className="flex gap-[5px]">
                    <Image
                      src="trading.svg"
                      alt="Trading"
                      width={16}
                      height={16}
                    />
                    <h6 className="text-[12px] font-normal text-[#737373]">
                      22 April 2021
                    </h6>
                  </div>
                </div>
                <div className="max-sm:block hidden">
                  <a href="#" className="flex items-center gap-[10px]">
                    <h6 className="text-[14px] font-bold text-[#737373]">
                      Learn More
                    </h6>
                    <Image
                      src="arrowRight.svg"
                      alt="Arrow Right"
                      width={9}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
