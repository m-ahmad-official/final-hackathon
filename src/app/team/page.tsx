import Footer2 from "@/components/Footer2";
import NavbarTeam from "@/components/NavbarTeam";
import Image from "next/image";
import { auth } from "@/app/utils/auth";
import { signOutTeam } from "@/app/actions/signOutTeam";

export default async function Team() {
  const session = await auth();
  return (
    <>
      <NavbarTeam session={session} signOutTeam={signOutTeam} />
      <div className="py-[50px] flex flex-col items-center gap-4">
        <h5 className="text-[16px] font-bold text-[#737373]">WHAT WE DO</h5>
        <h2 className="sm:text-[58px] text-[40px] font-bold text-[#252B42] max-sm:w-[330px] text-center">
          Innovation tailored for you
        </h2>
        <div className="flex items-center gap-[15px] py-[10px]">
          <a href="/" className="text-[14px] font-bold text-[#252B42]">
            Home
          </a>
          <div className="w-[9px] h-[16px]">
            <Image src="arrowRightGray.svg" alt="Arrow" width={9} height={16} />
          </div>
          <h6 className="text-[14px] font-bold text-[#737373]">Team</h6>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex max-sm:flex-col max-sm:gap-2 sm:w-[1440px] justify-between">
          <div className="team10"></div>
          <div className="flex flex-col max-sm:gap-2 justify-between">
            <div className="flex sm:w-[732px] justify-between">
              <div className="team11"></div>
              <div className="team12"></div>
            </div>
            <div className="flex sm:w-[732px] justify-between">
              <div className="team13"></div>
              <div className="team14"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col sm:gap-28 sm:py-28 py-[30px]">
          <div className="flex justify-center max-sm:py-[45px]">
            <h2 className="text-[40px] font-bold text-[#252B42] max-sm:w-[250px] text-center">
              Meet Our Team
            </h2>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team1"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team2"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team3"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team4"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team5"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team6"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team7"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team8"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team9"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
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
          <Image src="twt.svg" alt="Twitter" width={30} height={25} />
          <Image src="face1.svg" alt="Facebook" width={30} height={30} />
          <Image src="instab.svg" alt="Instagram" width={30} height={30} />
          <Image src="link.svg" alt="Linkedin" width={30} height={30} />
        </div>
      </div>
      <Footer2 />
    </>
  );
}
