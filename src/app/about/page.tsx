import Footer2 from "@/components/Footer2";
import NavbarAbout from "@/components/NavbarAbout";
import Image from "next/image";
import { auth } from "@/app/utils/auth";
import { signOutAbout } from "@/app/actions/signOutAbout";

export default async function About() {
  const session = await auth();
  return (
    <>
      <NavbarAbout session={session} signOutAbout={signOutAbout} />
      <div className="flex max-sm:flex-col max-sm:gap-[40px] justify-center items-center">
        <div className="sm:w-[685px] px-[9%]">
          <div className="sm:w-[400px] w-[270px] max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:h-[590px] flex flex-col sm:gap-[35px] gap-[40px]">
            <h5 className="sm:block hidden text-[16px] font-bold text-[#252B42]">
              ABOUT COMPANY
            </h5>
            <h1 className="sm:text-[58px] text-[40px] font-bold text-[#252B42]">
              ABOUT US
            </h1>
            <h4 className="sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
            </h4>
            <h4 className="max-sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <button className="h-[52px] w-[195px] bg-[#23A6F0] hover:bg-[#ffffff] px-[40px] py-[15px] rounded-[5px] text-[14px] text-[#FFFFFF] hover:text-[#23A6F0] transition-all duration-200">
              Get Quote Now
            </button>
          </div>
        </div>
        <div className="shoppingGirl"></div>
      </div>
      <div className="flex justify-center">
        <div className="sm:h-[236px] h-[500px] sm:w-[1020px] flex max-sm:flex-col items-center justify-between py-[80px] max-sm:gap-[60px] sm:py-6">
          <div className="flex gap-[60px]">
            <div className="sm:w-[400px] w-[300px] flex flex-col gap-[24px] max-sm:text-center">
              <p className="text-[14px] font-medium text-[#E74040]">
                Problems trying
              </p>
              <h2 className="text-[24px] font-bold text-[#252B42]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h2>
            </div>
          </div>
          <div className="sm:w-[545px] w-[340px]">
            <p className="text-[14px] font-medium text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1050px] max-sm:h-[1000px] py-[80px] flex max-sm:flex-col sm:justify-around max-sm:gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Happy Customers
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Monthly Visitors
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Countries Worldwide
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Top Partners
            </h5>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[477px] sm:h-[765px]">
        <div className="videoCard flex justify-center items-center sm:rounded-[20px] rounded-[12px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
          <button className="sm:h-[92px] sm:w-[92px] h-[57px] w-[57px] rounded-[50%] bg-[#23A6F0] flex justify-center items-center hover:scale-110 transition ease-in-out duration-300">
            <Image
              src="play1.svg"
              alt="Play"
              width={20}
              height={22}
              className="sm:block hidden"
            />
            <Image
              src="play2.svg"
              alt="Play"
              width={13}
              height={14}
              className="max-sm:block hidden"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col sm:gap-[112px] sm:py-[112px] py-[30px]">
          <div className="flex justify-center">
            <div className="flex flex-col gap-[10px] text-center w-[310px] sm:w-[470px] max-sm:py-[45px]">
              <h2 className="text-[40px] font-bold text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="text-[14px] font-medium text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
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
                    width={23}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                </div>
              </div>
            </div>
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
                    width={23}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                </div>
              </div>
            </div>
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
                    width={23}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex flex-col gap-[24px] sm:py-[80px] py-[120px]">
          <div className="flex flex-col items-center gap-[30px] text-center max-sm:w-[310px]">
            <h2 className="text-[40px] font-bold text-[#252B42]">
              Big Companies Are Here
            </h2>
            <p className="text-[14px] font-medium text-[#737373] sm:w-[480px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex max-sm:flex-col justify-between items-center gap-[60px] sm:gap-[30px] py-[50px] sm:w-[1055px]">
            <div>
              <Image src="client1.svg" alt="Client 1" width={150} height={50} />
            </div>
            <div>
              <Image
                src="client2.svg"
                alt="Client 2"
                width={140}
                height={100}
              />
            </div>
            <div>
              <Image
                src="client3.svg"
                alt="Client 3"
                width={150}
                height={110}
              />
            </div>
            <div>
              <Image src="client4.svg" alt="Client 4" width={150} height={60} />
            </div>
            <div>
              <Image src="client5.svg" alt="Client 5" width={153} height={92} />
            </div>
            <div>
              <Image
                src="client6.svg"
                alt="Client 6"
                width={150}
                height={140}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:justify-between justify-center bg-[#2A7CC7]">
        <div className="sm:py-[112px] py-[30px] max-sm:h-[520px] flex items-center justify-center gap-[36px] sm:px-[13%]">
          <div className="sm:w-[460px] w-[250px] max-sm:text-center flex flex-col max-sm:items-center gap-[24px]">
            <h5 className="text-[16px] font-bold text-[#FFFFFF]">
              WORK WITH US
            </h5>
            <h2 className="text-[40px] font-bold text-[#FFFFFF]">
              Now Let’s grow Yours
            </h2>
            <p className="text-[14px] font-medium text-[#FFFFFF]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="text-[14px] flex justify-center items-center font-bold text-[#FAFAFA] hover:text-[#2A7CC7] rounded-[5px] w-[130px] h-[50px] py-[15px] px-[40px] hover:bg-[#fafafa] border-[#FAFAFA] hover:border-[#2A7CC7] border-[1px] transition-all duration-200">
              Button
            </button>
          </div>
        </div>
        <div className="testimonials sm:block hidden"></div>
      </div>
      <Footer2 />
    </>
  );
}
