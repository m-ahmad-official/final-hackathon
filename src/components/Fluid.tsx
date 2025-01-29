export default function Fluid() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-sm:h-[1000px] flex max-sm:flex-col-reverse items-center gap-7">
        <div className="fluid"></div>
        <div className="flex flex-col max-sm:items-center max-sm:gap-[30px] justify-between max-sm:text-center sm:h-[326px] sm:w-[380px]">
          <h5 className="text-[16px] font-bold text-[#BDBDBD]">SUMMER 2020</h5>
          <h1 className="text-[40px] font-bold text-[#252B42] max-sm:w-[280px]">
            Part of the Neural Universe
          </h1>
          <h4 className="text-[20px] font-normal text-[#737373] max-sm:w-[260px]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex max-sm:flex-col max-sm:items-center gap-[25px] sm:gap-[10px]">
            <div className="w-[156px] h-[52px] rounded-[5px] px-[40px] py-[15px] flex gap-[10px] text-[#ffffff] hover:text-[#2DC071] sm:bg-[#2DC071] bg-[#23A6F0] hover:bg-[#ffffff] cursor-pointer transition-all duration-200">
              <h3 className="text-[14px] font-bold">BUY NOW</h3>
            </div>
            <div className="w-[173px] h-[52px] rounded-[5px] px-[35px] py-[15px] flex justify-center border sm:border-2 sm:text-[#2DC071] text-[#23A6F0] hover:text-[#ffffff] hover:bg-[#2DC071] sm:border-[#2DC071] border-[#23A6F0] hover:border-[#ffffff] cursor-pointer transition-all duration-200">
              <h3 className="sm:block hidden text-[14px] font-bold">
                READ MORE
              </h3>
              <h3 className="max-sm:block hidden text-[14px] font-bold">
                Learn More
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
