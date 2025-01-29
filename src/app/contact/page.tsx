import Footer2 from "@/components/Footer2";
import Image from "next/image";
import NavbarContact from "@/components/NavbarContact";
import { auth } from "@/app/utils/auth";
import { signOutContact } from "@/app/actions/signOutContact";

export default async function Contact() {
  const session = await auth();

  return (
    <>
      <NavbarContact session={session} signOutContact={signOutContact} />
      <div className="flex max-sm:flex-col max-sm:gap-[40px] justify-center items-center">
        <div className="sm:w-[680px] sm:px-[9%]">
          <div className="flex flex-col max-sm:justify-center max-sm:items-center gap-[40px] max-sm:h-[625px] sm:gap-[35px] w-[270px] sm:w-[400px] max-sm:text-center mt-6">
            <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>
            <h1 className="sm:text-[58px] text-[40px] font-bold text-[#252B42]">
              Get in touch today!
            </h1>
            <h4 className="sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
            </h4>
            <h4 className="max-sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <div className="flex flex-col justify-between h-[84px]">
              <p className="text-[24px] font-bold text-[#252B42]">
                Phone ; +451 215 215
              </p>
              <p className="text-[24px] font-bold text-[#252B42]">
                Fax : +451 215 215
              </p>
            </div>
            <div className="flex justify-between w-[242px] p-[10px]">
              <Image src="twtb.svg" alt="Twitter" width={30} height={30} />
              <Image src="faceb.svg" alt="Facebook" width={30} height={30} />
              <Image src="instab.svg" alt="Instagram" width={30} height={30} />
              <Image src="linkb.svg" alt="LinkedIn" width={30} height={30} />
            </div>
          </div>
        </div>
        <div className="contactHeader"></div>
      </div>
      <div className="flex justify-center max-sm:h-[1600px] max-sm:bg-[#FAFAFA]">
        <div className="flex flex-col items-center gap-[60px] sm:gap-[80px] py-[45px] sm:py-[112px] text-center">
          <div className="flex flex-col gap-[10px] w-[300px] sm:w-[600px]">
            <h6 className="text-[14px] font-bold text-[#252B42]">
              VISIT OUR OFFICE
            </h6>
            <h2 className="text-[40px] font-bold text-[#252B42]">
              We help small businesses with big ideas
            </h2>
          </div>
          <div className="flex max-sm:flex-col items-center">
            <div className="w-[330px] h-[390px] sm:h-[400px] bg-[#ffffff] flex flex-col items-center sm:justify-center gap-[15px] py-[50px] px-[45px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="w-[72px] h-[72px]">
                <Image
                  src="contact1.svg"
                  alt="Contact"
                  width={72}
                  height={72}
                />
              </div>
              <div>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@example.com
                </h6>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              <h5 className="text-[16px] font-bold text-[#252B42]">
                Get Support
              </h5>
              <button className="py-[10px] sm:py-[15px] px-[20px] sm:px-[35px] rounded-[5px] sm:rounded-[37px] border-[1px] border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
                Submit Request
              </button>
            </div>
            <div className="w-[330px] h-[400px] bg-[#252B42] flex flex-col items-center justify-center gap-[15px] py-[50px] px-[45px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="w-[51px] h-[67px]">
                <Image src="map.svg" alt="Contact" width={51} height={67} />
              </div>
              <div>
                <h6 className="text-[14px] font-semibold text-[#ffffff]">
                  georgia.young@example.com
                </h6>
                <h6 className="text-[14px] font-semibold text-[#ffffff]">
                  georgia.young@ple.com
                </h6>
              </div>
              <h5 className="text-[16px] font-bold text-[#ffffff]">
                Get Support
              </h5>
              <button className="py-[15px] px-[36px] rounded-[5px] sm:rounded-[37px] border-[1px] border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
                Submit Request
              </button>
            </div>
            <div className="w-[330px] h-[400px] bg-[#ffffff] flex flex-col items-center justify-center gap-[15px] py-[50px] px-[45px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="w-[72px] h-[55px] sm:block hidden">
                <Image
                  src="message1.svg"
                  alt="Message"
                  width={72}
                  height={55}
                />
              </div>
              <div className="w-[69px] h-[72px] max-sm:block hidden">
                <Image src="share.svg" alt="Share" width={69} height={72} />
              </div>
              <div>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@example.com
                </h6>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              <h5 className="text-[16px] font-bold text-[#252B42]">
                Get Support
              </h5>
              <button className="py-[15px] px-[36px] rounded-[5px] sm:rounded-[37px] border-[1px] border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-sm:py-[40px]">
        <div className="w-[72px]">
          <Image src="arrowRotate.svg" alt="Arrow" width={62} height={62} />
        </div>
        <div className="flex flex-col items-center gap-[30px] sm:gap-[16px] max-sm:pt-[20px] max-sm:pb-[80px] sm:py-[80px]">
          <h6 className="text-[16px] font-bold text-[#252B42]">
            WE Cant WAIT TO MEET YOU
          </h6>
          <h2 className="text-[58px] font-bold text-[#252B42]">Let’s Talk</h2>
          <button className="h-[52px] w-[186px] rounded-[5px] bg-[#23A6F0] text-[14px] font-bold text-[#ffffff] hover:text-[#23A6F0] hover:bg-[#ffffff] transition-all duration-200">
            Try it free now
          </button>
        </div>
      </div>
      <Footer2 />
    </>
  );
}
