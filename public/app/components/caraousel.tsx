import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carausel() {
  return (
    <div className="relative w-full h-[716px]">
      {/* Image Section */}
      <div className="w-full h-full">
        <Image
          src={women}
          alt="women"
          fill={true}  // Takes up the full container
          objectPosition="center"  // Ensures the image stays centered
          style={{ objectFit: "cover" }} // Ensures the image covers the area, maintaining aspect ratio
        />
      </div>

      {/* Content Section */}
      <div className="absolute flex flex-col justify-center left-[5%] top-[20%] items-start gap-[20px] px-6 lg:px-16 z-10">
        <h5 className="font-Montserrat font-semibold text-[14px] lg:text-[16px] text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-[36px] sm:text-[48px] lg:text-[58px] text-white max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-white max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-[180px] sm:w-[200px] lg:w-[221px] h-[50px] sm:h-[55px] lg:h-[62px] rounded-[5px] px-[30px] sm:px-[35px] lg:px-[40px] py-[12px] sm:py-[14px] lg:py-[15px] bg-[#2DC071] text-white text-[18px] sm:text-[20px] lg:text-[24px] font-Montserrat leading-[32px] justify-center">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
