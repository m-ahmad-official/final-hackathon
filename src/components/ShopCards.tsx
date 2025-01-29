export default function ShopCards() {
  return (
    <div className="bg-[#FAFAFA] flex justify-center">
      <div className="py-[80px] flex flex-col gap-[48px] items-center">
        <div className="max-sm:w-[207px] sm:h-[62px] flex flex-col items-center">
          <div className="flex flex-col items-center gap-[10px] text-center">
            <h2 className="text-[24px] font-bold text-[#252B42]">
              EDITOR’S PICK
            </h2>
            <p className="text-[14px] font-medium text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
        <div className="flex max-sm:flex-col gap-[30px]">
          <div className="men bg-[#ffffff] flex flex-col justify-end hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <h2 className="w-[170px] h-[50px] bg-[#ffffff] m-6 text-[16px] font-bold flex justify-center items-center">
              MEN
            </h2>
          </div>
          <div className="women bg-[#ffffff] flex flex-col justify-end hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
            <h2 className="w-[136px] h-[50px] bg-[#ffffff] m-6 text-[16px] font-bold flex justify-center items-center">
              WOMEN
            </h2>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="accessories bg-[#ffffff] flex flex-col justify-end hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <h2 className="w-[171px] h-[50px] bg-[#ffffff] m-6 text-[16px] font-bold flex justify-center items-center">
                ACCESSORIES
              </h2>
            </div>
            <div className="kid bg-[#ffffff] flex flex-col justify-end hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <h2 className="w-[120px] h-[50px] bg-[#ffffff] m-6 text-[16px] font-bold flex justify-center items-center">
                KIDS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
