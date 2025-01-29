import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-12">
      {/* Top Section */}
      <section className="bg-[#f9f9f9] py-6 sm:py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-[#252b42] text-2xl sm:text-3xl font-bold leading-loose tracking-tight text-center sm:text-left">
              Bandage
            </h1>
          </div>
          <div className="flex gap-6 mt-4 sm:mt-0">
          <svg className="text-blue-500" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12l-5-5v3H3v4h14v3z"/>
          </svg>

          <Image
             src="/images/facebook (1).png"
             alt="Facebook"
             width={24}
             height={24}
             className="filter-blue"
             />
          <Image
             src="/images/Vector.png"
             alt="Instagram"
              width={24}
              height={24}
             className="filter-blue"
            />
          <Image
             src="/images/ant-design_twitter-outlined (1).png"
             alt="Twitter"
             width={24}
             height={24}
             className="filter-blue"
           />

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e6e6e6]" />

      {/* Main Footer Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16">
          {/* Company Info */}
          <div>
            <h2 className="text-[#252b42] text-lg sm:text-base font-bold">Company Info</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-normal">
                About Us
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Careers
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                We Are Hiring
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Blog
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-[#252b42] text-lg sm:text-base font-bold">Legal</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-normal">
                Terms of Service
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Privacy Policy
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Cookies
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Refund Policy
              </a>
            </nav>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-[#252b42] text-lg sm:text-base font-bold">Features</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-normal">
                Business Marketing
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                User Analytics
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Live Chat
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Unlimited Support
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-[#252b42] text-lg sm:text-base font-bold">Resources</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-normal">
                iOS & Android
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Watch a Demo
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                Customers
              </a>
              <a href="#" className="text-[#727272] text-sm font-normal">
                API
              </a>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="text-[#252b42] text-lg sm:text-base font-bold">Get In Touch</h2>
            <div className="mt-3">
              <div className="relative mb-4">
                <input
                  type="email"
                  className="w-full sm:w-[221px] h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                  placeholder="Your Email"
                />
                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#727272] text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#f9f9f9] py-4 sm:py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#727272] text-sm sm:text-base font-normal text-center sm:text-left">
            Made with love by Finland. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {/* Add links for social media icons if needed */}
          </div>
        </div>
      </section>
    </footer>
  );
}
