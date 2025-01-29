export default function Carousel2() {
  return (
    <div className="bg-[#23856D] flex items-center justify-center">
      <div className="sm:w-[1036px] h-[1300px] sm:h-[711px] pt-[200px] sm:py-[112px] flex justify-between gap-[80px]">
        <div className="flex max-sm:flex-col max-sm:items-center justify-between sm:w-[1049px]">
          <div className="flex flex-col max-sm:text-center max-sm:items-center gap-[30px] h-[432px] sm:w-[350px] pt-[60px]">
            <h5 className="text-[20px] font-normal text-white">SUMMER 2020</h5>
            <h1 className="text-[40px] sm:text-[58px] font-bold text-white">
              Vita Classic Product
            </h1>
            <h4 className="max-sm:block w-[280px] hidden text-[20px] font-normal text-white">
              We know how large objects will act, but things on a small scale.
            </h4>
            <h4 className="sm:block hidden text-[14px] font-normal text-white">
              We know how large objects will act, We know how are objects will
              act, We know
            </h4>
            <div className="w-[295px] h-[52px] flex max-sm:flex-col items-center gap-[20px] sm:gap-[34px]">
              <h5 className="text-[24px] font-bold text-white">$16.48</h5>
              <div className="w-[184px] h-[52px] rounded-[5px] px-[40px] py-[15px] cursor-pointer text-white hover:text-[#2DC071] hover:bg-white bg-[#2DC071] transition-all duration-200">
                <h5 className="text-[14px] font-bold">ADD TO CART</h5>
              </div>
            </div>
          </div>
          <div className="carousel2"></div>
        </div>
      </div>
    </div>
  );
}
