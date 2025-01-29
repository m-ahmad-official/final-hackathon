import Footer1 from "@/components/Footer1";
import NavbarPricing from "@/components/NavbarPricing";
import Image from "next/image";
import { auth } from "@/app/utils/auth";
import { signOutPricing } from "@/app/actions/signOutPricing";

export default async function Pricing() {
  const session = await auth();
  return (
    <div className="sm:pt-[112px] sm:flex flex-col items-center justify-center gap-[48px] bg-[#FAFAFA]">
      <div className="bg-[#FFFFFF]">
        <NavbarPricing session={session} signOutPricing={signOutPricing} />
        <div className="py-[50px] flex flex-col items-center gap-4">
          <h5 className="text-[16px] font-bold text-[#737373]">PRICING</h5>
          <h2 className="sm:text-[58px] text-[40px] font-bold text-[#252B42]">
            Simple Pricing
          </h2>
          <div className="flex items-center gap-[15px] py-[10px]">
            <a href="/" className="text-[14px] font-bold text-[#252B42]">
              Home
            </a>
            <div className="w-[9px] h-[16px]">
              <Image
                src="arrowRightGray.svg"
                alt="Arrow"
                width={9}
                height={16}
              />
            </div>
            <h6 className="text-[14px] font-bold text-[#737373]">Pricing</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-[10px] sm:w-[470px] max-sm:py-[45px]">
        <h2 className="text-[40px] font-bold text-[#252B42]">Pricing</h2>
        <p className="text-[14px] font-medium sm:font-bold text-[#737373] max-sm:w-[270px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex gap-[16px] items-center justify-center">
        <div className="flex gap-[16px]">
          <h5 className="text-[16px] font-bold text-[#252B42]">Monthly</h5>
          <label className="cursor-pointer">
            <input type="checkbox" className="sr-only peer"></input>
            <div className="relative w-[45px] h-[25px] bg-[#FFFFFF] rounded-[16px] border-[1px] border-[#23A6F0] peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[3px] after:bg-[#EBEBEB] after:border-[#D0D0D0] after:border-[1px] after:rounded-[50%] after:h-[19px] after:w-[19px] after:transition-all peer-checked:bg-[#23A6F0]"></div>
          </label>
          <h5 className="text-[16px] font-bold text-[#252B42]">Yearly</h5>
        </div>
        <button className="rounded-[37px] py-[10px] px-[20px] bg-[#B2E3FF]">
          <h6 className="text-[14px] font-bold text-[#23A6F0]">Save 25%</h6>
        </button>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-[30px] max-sm:py-[45px] items-center">
        <div className="flex flex-col gap-[35px] items-center py-[50px] px-[40px] border-[1px] border-[#23A6F0] sm:rounded-[10px]">
          <h3 className="text-[24px] font-bold text-[#252B42]">FREE</h3>
          <h5 className="text-[16px] font-bold text-[#737373] w-[160px] text-center">
            Organize across all apps by hand
          </h5>
          <div className="flex gap-[10px]">
            <h2 className="text-[40px] font-bold text-[#23A6F0]">0</h2>
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold text-[#23A6F0]">$</h3>
              <h5 className="text-[14px] font-semibold text-[#8EC2F2]">
                Per Month
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#BDBDBD] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                1GB Cloud storage
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#BDBDBD] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42] w-[170px]">
                Email and community support
              </h6>
            </div>
          </div>
          <button className="bg-[#23A6F0] hover:bg-[#fff] w-[245px] px-[40px] py-[15px] rounded-[5px] text-[#FFFFFF] hover:text-[#23A6F0] font-bold text-[14px] transition-all duration-200">
            Try for free
          </button>
        </div>
        <div className="flex flex-col gap-[35px] items-center bg-[#252B42] py-[80px] sm:py-[70px] px-[40px] border-[1px] border-[#23A6F0] sm:rounded-[10px]">
          <h3 className="text-[24px] font-bold text-[#ffffff]">STANDARD</h3>
          <h5 className="text-[16px] font-bold text-[#ffffff] w-[160px] text-center">
            Organize across all apps by hand
          </h5>
          <div className="flex gap-[10px]">
            <h2 className="text-[40px] font-bold text-[#23A6F0]">9.99</h2>
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold text-[#23A6F0]">$</h3>
              <h5 className="text-[14px] font-semibold text-[#8EC2F2]">
                Per Month
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#ffffff]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#ffffff]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#ffffff]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#BDBDBD] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#ffffff]">
                1GB Cloud storage
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#BDBDBD] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#ffffff] w-[170px]">
                Email and community support
              </h6>
            </div>
          </div>
          <button className="bg-[#23A6F0] hover:bg-[#252B42] w-[245px] px-[40px] py-[15px] rounded-[5px] text-[#FFFFFF] hover:text-[#23A6F0] font-bold text-[14px] transition-all duration-200">
            Try for free
          </button>
        </div>
        <div className="flex flex-col gap-[35px] items-center py-[50px] px-[40px] border-[1px] border-[#23A6F0] sm:rounded-[10px]">
          <h3 className="text-[24px] font-bold text-[#252B42]">PREMIUM</h3>
          <h5 className="text-[16px] font-bold text-[#737373] w-[160px] text-center">
            Organize across all apps by hand
          </h5>
          <div className="flex gap-[10px]">
            <h2 className="text-[40px] font-bold text-[#23A6F0]">19.99</h2>
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold text-[#23A6F0]">$</h3>
              <h5 className="text-[14px] font-semibold text-[#8EC2F2]">
                Per Month
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2DC071] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                Unlimited product updates
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#BDBDBD] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42]">
                1GB Cloud storage
              </h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#BDBDBD] rounded-[50%] w-8 h-8 flex justify-center items-center">
                <Image src="check.svg" alt="Checked" width={16} height={12} />
              </div>
              <h6 className="text-[14px] font-bold text-[#252B42] w-[170px]">
                Email and community support
              </h6>
            </div>
          </div>
          <button className="bg-[#23A6F0] hover:bg-[#fff] w-[245px] px-[40px] py-[15px] rounded-[5px] text-[#FFFFFF] hover:text-[#23A6F0] font-bold text-[14px] transition-all duration-200">
            Try for free
          </button>
        </div>
      </div>
      <div className="bg-[#FAFAFA] sm:pt-[80px] max-sm:py-[80px] flex flex-col max-sm:gap-[23px] items-center">
        <h2 className="text-[20px] font-medium text-[#252B42] max-sm:w-[230px] text-center">
          Trusted By Over 4000 Big Companies
        </h2>
        <div className="flex max-sm:flex-col items-center gap-[60px] sm:gap-[30px] py-[50px]">
          <div>
            <Image src="client1.svg" alt="Client 1" width={153} height={50} />
          </div>
          <div>
            <Image src="client2.svg" alt="Client 2" width={146} height={100} />
          </div>
          <div>
            <Image src="client3.svg" alt="Client 3" width={152} height={109} />
          </div>
          <div>
            <Image src="client4.svg" alt="Client 4" width={149} height={60} />
          </div>
          <div>
            <Image src="client5.svg" alt="Client 5" width={151} height={92} />
          </div>
          <div>
            <Image src="client6.svg" alt="Client 6" width={151} height={142} />
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] w-full">
        <div className="flex flex-col sm:items-center gap-[80px] sm:gap-[50px] py-[80px]">
          <div className="flex flex-col items-center sm:gap-[10px] gap-[15px] sm:py-[45px] text-center">
            <h2 className="text-[40px] font-bold text-[#252B42]">
              Pricing FAQs
            </h2>
            <p className="sm:block hidden text-[20px] font-medium text-[#737373] w-[520px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>
            <p className="max-sm:block hidden text-[14px] font-medium text-[#252B42] w-[280px]">
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </p>
          </div>
          <div className="sm:block hidden flex-col gap-[30px]">
            <div className="flex gap-[30px] w-[1055px]">
              <div className="flex p-[25px] gap-[20px]">
                <Image
                  src="arrowRight.svg"
                  alt="Arrow Right"
                  width={9}
                  height={16}
                  className="h-[16px]"
                />
                <div className="flex flex-col gap-[5px] w-[415px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </h6>
                </div>
              </div>
              <div className="flex p-[25px] gap-[20px]">
                <Image
                  src="arrowRight.svg"
                  alt="Arrow Right"
                  width={9}
                  height={16}
                  className="h-[16px]"
                />
                <div className="flex flex-col gap-[5px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] w-[1055px]">
              <div className="flex p-[25px] gap-[20px]">
                <Image
                  src="arrowRight.svg"
                  alt="Arrow Right"
                  width={9}
                  height={16}
                  className="h-[16px]"
                />
                <div className="flex flex-col gap-[5px] w-[415px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </h6>
                </div>
              </div>
              <div className="flex p-[25px] gap-[20px]">
                <Image
                  src="arrowRight.svg"
                  alt="Arrow Right"
                  width={9}
                  height={16}
                  className="h-[16px]"
                />
                <div className="flex flex-col gap-[5px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] w-[1055px]">
              <div className="flex p-[25px] gap-[20px]">
                <Image
                  src="arrowRight.svg"
                  alt="Arrow Right"
                  width={9}
                  height={16}
                  className="h-[16px]"
                />
                <div className="flex flex-col gap-[5px] w-[415px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </h6>
                </div>
              </div>
              <div className="flex p-[25px] gap-[20px]">
                <Image
                  src="arrowRight.svg"
                  alt="Arrow Right"
                  width={9}
                  height={16}
                  className="h-[16px]"
                />
                <div className="flex flex-col gap-[5px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:block hidden gap-[10px] w-[360px]">
            <div className="p-4">
              <h5 className="py-4 px-6 text-[16px] font-bold text-[#252B42]">
                Work better together
              </h5>
              <p className="py-4 px-6 text-[14px] font-medium text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="p-4">
              <h5 className="py-4 px-6 text-[16px] font-bold text-[#252B42]">
                OpenType features and Variable fonts
              </h5>
              <p className="py-4 px-6 text-[14px] font-medium text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="p-4">
              <h5 className="py-4 px-6 text-[16px] font-bold text-[#252B42]">
                Start working faster today
              </h5>
              <p className="py-4 px-6 text-[14px] font-medium text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="p-4">
              <h5 className="py-4 px-6 text-[16px] font-bold text-[#252B42]">
                Work at the speed of thought.
              </h5>
              <p className="py-4 px-6 text-[14px] font-medium text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="p-4">
              <h5 className="py-4 px-6 text-[16px] font-bold text-[#252B42]">
                The Fastest way to organize
              </h5>
              <p className="py-4 px-6 text-[14px] font-medium text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="p-4">
              <h5 className="py-4 px-6 text-[16px] font-bold text-[#252B42]">
                The Fastest way to navigate
              </h5>
              <p className="py-4 px-6 text-[14px] font-medium text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-[20px] font-medium text-[#737373] text-center max-sm:w-[287px]">
              Haven’t got your answer? Contact our support
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#ffffff] justify-center items-center w-full flex-col gap-[30px] p-28 sm:py-40">
        <h2 className="text-[40px] font-bold text-[#252B42] max-sm:w-[321px] text-center">
          Start your 14 days free trial
        </h2>
        <h6 className="text-[14px] font-medium text-[#737373] w-[411px] text-center max-sm:w-[321px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h6>
        <button className="bg-[#23A6F0] hover:bg-[#fff] w-[186px] px-[40px] py-[15px] rounded-[5px] text-[#FFFFFF] hover:text-[#23A6F0] font-bold text-[14px] transition-all duration-200">
          Try for free
        </button>
        <div className="flex items-center justify-center gap-[34px] py-[10px]">
          <Image
            src="twt.svg"
            alt="Twitter"
            width={30}
            height={30}
            className="w-[30px] h-[25px]"
          />
          <Image
            src="face1.svg"
            alt="Facebook"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
          <Image
            src="instab.svg"
            alt="Instagram"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
          <Image
            src="link.svg"
            alt="Linkedin"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
