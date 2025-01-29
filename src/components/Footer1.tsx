import Image from "next/image";

export default function Footer1() {
  return (
    <footer className="flex flex-col">
      <div className="bg-[#fafafa] h-[173px] sm:h-[142px] flex items-center justify-center">
        <div className="sm:w-[1050px] py-[40px]">
          <div className="flex max-sm:flex-col sm:justify-between sm:items-center max-sm:gap-[20px]">
            <h2 className="text-[#252B42] font-bold text-[24px]">Bandage</h2>
            <div className="w-[112px] flex gap-[20px]">
              <a href="https://facebook.com/m.ahmad.official7" target="_blank">
                <Image src="face.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com/m.ahmad.official" target="_blank">
                <Image src="insta.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="/">
                <Image src="twt.svg" alt="Twitter" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="sm:h-[272px] h-[1071px] flex items-center justify-center">
        <div className="py-[50-px]">
          <div className="sm:w-[1050px] sm:h-[170px] w-[321px] flex max-sm:flex-col gap-[30px]">
            <div className="w-[148px] flex flex-col gap-[20px]">
              <h5 className="text-[16px] font-bold text-[#252B42]">
                Company Info
              </h5>
              <div className="flex flex-col gap-[10px]">
                <h6 className="text-[14px] font-bold text-[#737373]">
                  About Us
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Carrier
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  We are hiring
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">Blog</h6>
              </div>
            </div>
            <div className="w-[148px] flex flex-col gap-[20px]">
              <h5 className="text-[16px] font-bold text-[#252B42]">Legal</h5>
              <div className="flex flex-col gap-[10px]">
                <h6 className="text-[14px] font-bold text-[#737373]">
                  About Us
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Carrier
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  We are hiring
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">Blog</h6>
              </div>
            </div>
            <div className="w-[148px] flex flex-col gap-[20px]">
              <h5 className="text-[16px] font-bold text-[#252B42]">Features</h5>
              <div className="flex flex-col gap-[10px]">
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Business Marketing
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  User Analytic
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Live Chat
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Unlimited Support
                </h6>
              </div>
            </div>
            <div className="w-[148px] flex flex-col gap-[20px]">
              <h5 className="text-[16px] font-bold text-[#252B42]">
                Resources
              </h5>
              <div className="flex flex-col gap-[10px]">
                <h6 className="text-[14px] font-bold text-[#737373]">
                  IOS & Android
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Watch a Demo
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Customers
                </h6>
                <h6 className="text-[14px] font-bold text-[#737373]">API</h6>
              </div>
            </div>
            <div className="w-[321px] h-[131px] flex flex-col gap-[20px]">
              <h5 className="text-[16px] font-bold text-[#252B42]">
                Get In Touch
              </h5>
              <div className="flex flex-col gap-[5px]">
                <form className="flex h-[58px]">
                  <input
                    type="email"
                    className="rounded-l-[5px] font-medium pl-5 border-[1px] border-[#E6E6E6] bg-[#F9F9F9] max-sm:w-[65%]"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="submit"
                    value={"Subscribe"}
                    className="px-4 bg-[#23a6f0] text-white text-[14px] font-medium rounded-r-[5px] w-[30%] max-sm:flex max-sm:justify-center max-sm:items-center cursor-pointer"
                  />
                </form>
                <p className="text-[12px] font-medium text-[#737373]">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-[74px] h-[98px] bg-[#fafafa] flex items-center justify-center">
        <div className="sm:w-[1050px] w-[200px] py-[25px] flex items-center">
          <h6 className="text-[14px] font-bold max-sm:text-center text-[#737373]">
            Made With Love By Finland All Right Reserved
          </h6>
        </div>
      </div>
    </footer>
  );
}
