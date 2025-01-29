import Link from "next/link";

export default function Carousel() {
  return (
    <div className="imageGirl flex justify-center items-center">
      <div className="sm:w-full max-w-[1044px] py-[112px] flex max-h-[705px]">
        <div className="flex flex-col max-sm:items-center w-[290px] gap-[35px] text-center sm:text-left py-[48px]">
          <h5 className="text-[16px] font-bold text-[#ffffff]">SUMMER 2020</h5>
          <h1 className="text-[40px] sm:text-[58px] font-bold text-[#ffffff]">
            NEW COLLECTION
          </h1>
          <h4 className="text-[20px] font-normal w-full sm:w-[370px] text-[#fafafa]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex justify-center sm:justify-start">
            <Link
              href={"/shop"}
              className="text-[24px] font-bold sm:py-[15px] sm:px-[40px] text-white bg-[#2DC071] hover:text-[#2DC071] hover:bg-white border border-[#2DC071] rounded-md cursor-pointer max-sm:w-[221px] max-sm:h-[62px] transition-all duration-200 flex justify-center items-center"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
