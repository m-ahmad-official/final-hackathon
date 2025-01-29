import Image from "next/image";

export default function NavbarDark() {
  return (
    <div className="bg-[#252B42] sm:block hidden">
      <div className="flex justify-between items-center h-[58px] px-6">
        <div className="flex gap-[10px]">
          <div className="flex gap-[5px] p-[10px] rounded-[5px] items-center">
            <Image src="contact.svg" alt="Contact" width={16} height={16} />
            <h6 className="text-[14px] font-bold text-white">
              (+92) 322668303
            </h6>
          </div>
          <div className="flex gap-[5px] p-[10px] rounded-[5px] items-center">
            <Image
              className="w-4 h-3"
              src="message.svg"
              alt="Message"
              width={16}
              height={12}
            />
            <h6 className="text-[14px] font-bold text-white">
              aq320647@gmail.com
            </h6>
          </div>
        </div>
        <div>
          <h6 className="flex gap-[10px] p-[10px] text-[14px] font-bold text-white">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="flex gap-[10px] items-center p-[10px]">
          <h6 className="text-[14px] font-bold text-white">Follow Us :</h6>
          <div className="flex items-center">
            <a href="https://instagram.com/m.ahmad.official" target="_blank">
              <Image
                className="p-[5px] gap-[10px]"
                src="instagram.svg"
                alt="Contact"
                width={26}
                height={26}
              />
            </a>
            <Image
              className="p-[5px] gap-[10px]"
              src="youtube.svg"
              alt="Youtube"
              width={26}
              height={26}
            />
            <a href="https://facebook.com/m.ahmad.official7" target="_blank">
              <Image
                className="p-[5px] gap-[10px]"
                src="facebook.svg"
                alt="Facebook"
                width={26}
                height={26}
              />
            </a>
            <Image
              className="p-[5px] gap-[10px]"
              src="twitter.svg"
              alt="Twitter"
              width={26}
              height={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
