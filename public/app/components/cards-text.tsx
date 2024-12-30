import Image from "next/image";
import colours from "@/images/product-colors.png";

export default function CardText() {
  return (
    <div className="w-full sm:w-[239px] h-auto sm:h-[188px] py-[15px] sm:py-[25px] px-[15px] sm:px-[25px] flex flex-col items-center justify-center gap-[10px]">
      {/* Title */}
      <h5 className="w-full font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>

      {/* Department */}
      <p className="w-full font-Montserrat font-bold text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-center text-[#737373]">
        English Department
      </p>

      {/* Pricing */}
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>

      {/* Color Options */}
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>
    </div>
  );
}
