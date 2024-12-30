import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full bg-[#23856D] pt-[80px] pb-[80px] px-[20px]">
      {/* Container for max width and flexbox layout */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-[30px]">
        {/* Text Section */}
        <div className="w-full lg:w-[50%] flex flex-col gap-[30px] text-white">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px]">SUMMER 2020</h4>
          <h1 className="font-Montserrat font-bold text-[36px] sm:text-[48px] lg:text-[58px] leading-[50px] sm:leading-[70px] lg:leading-[80px]">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-[14px] leading-[20px] sm:text-[16px]">
            We know how large objects will act, We know how objects will act, We know
          </p>
          <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[34px]">
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px]">$16.48</h3>
            <button className="w-full sm:w-[184px] h-[52px] rounded-[5px] bg-[#2DC071] py-[15px] flex justify-center items-center text-white font-Montserrat text-[14px] leading-[22px]">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <Image src={greenman} alt="greenman" className="w-full max-w-[510px]" />
        </div>
      </div>
    </div>
  );
}
