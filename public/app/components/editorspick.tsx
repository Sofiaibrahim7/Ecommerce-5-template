import Image from "next/image";
import Men from "@/images/filter.png";
import women from "@/images/filter (1).png";
import div1 from "@/images/filter (2).png";
import div2 from "@/images/filter (3).png";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-[10px] bg-[#f5f5f5]">
      <div className="w-full sm:w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[20px] sm:p-[40px]">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[18px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-center">
            EDITOR’S PICK
          </h3>
          <p className="w-full sm:w-[347px] h-auto font-Montserrat font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        
        {/* Images Section */}
        <div className="w-full flex flex-col sm:flex-row gap-[30px] sm:gap-[30px]">
          {/* Men Image */}
          <div className="relative w-full sm:w-[510px] h-[300px] sm:h-[500px]">
            <Image
              src={Men}
              alt="men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 bg-white px-[30px] py-[8px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>
          
          {/* Women Image */}
          <div className="relative w-full sm:w-[240px] h-[300px] sm:h-[500px]">
            <Image
              src={women}
              alt="women"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 w-[140px] sm:w-[136px] h-[48px] px-[24px] py-[12px] bg-white shadow-md flex items-center justify-center gap-[10px]">
              <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>
          
          {/* Accessories and Kids */}
          <div className="w-full flex flex-col sm:w-[240px] sm:h-[500px] gap-[30px]">
            {/* Accessories Image */}
            <div className="relative w-full sm:w-[240px] h-[242px]">
              <Image
                src={div1}
                alt="div1"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 w-[140px] sm:w-[136px] h-[48px] px-[24px] py-[12px] bg-white shadow-md flex items-center justify-center gap-[10px]">
                <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>
            
            {/* Kids Image */}
            <div className="relative w-full sm:w-[240px] h-[242px]">
              <Image
                src={div2}
                alt="div2"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 w-[140px] sm:w-[136px] h-[48px] px-[24px] py-[12px] bg-white shadow-md flex items-center justify-center gap-[10px]">
                <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
