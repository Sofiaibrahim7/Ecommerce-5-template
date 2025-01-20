import Image from "next/image";
// import media3 from "../public/images/media3.png";
import media3 from "../../../../public/media (3).png"
import media2 from "../../../../public/media (2).png"
import media1 from "../../../../public/media (1).png"
// import media2 from "../public/images/media2.png";
// import media1 from "../public/images/media1.png";
import technology from "../../../../public/images/technology 1.png"


const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="py-4 shadow-md bg-gray-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold text-gray-800">Bandage</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/components/shop" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="/components/product" className="text-gray-700 hover:text-blue-600">Product</a>
            <a href="/components/pricingcards" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="/components/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Become a member
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Get Quote Now
            </button>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={technology}
              alt="About Hero"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>  
      <section className="py-10 px-4">
  <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
    <div className="md:w-1/2">
      <h4 className="text-red-500 font-medium text-sm mb-2">
        Problems trying
      </h4>
      <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight">
        Problems trying to resolve the conflict between the two major realms of Classical physics.
      </h2>
    </div>
    <div className="md:w-1/2 mt-6 md:mt-0">
      <h4 className="text-gray-700 font-medium text-sm mb-2">
        Why it matters
      </h4>
      <p className="text-gray-500 text-lg leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Newtonian mechanics and its applications remain relevant in understanding fundamental principles of motion.
      </p>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">15K</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">150K</h3>
              <p className="text-gray-600">Monthly Visitors</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">15</h3>
              <p className="text-gray-600">Countries Worldwide</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-600">Top Partners</p>
            </div>
          </div>
        </div>
      </section>
      {/* Landscape */}
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src="/images/container.png" 
          alt="Beautiful landscape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Stunning View</h2>
        <p className="text-gray-600 mt-2">
          Enjoy the serene beauty of nature with this breathtaking view of the mountains and lake.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
      {/* Team Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 mb-10">
            Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[media1, media2, media3].map((imageSrc, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-lg">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={imageSrc}
                    alt={`Team Member ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Username</h3>
                <p className="text-gray-600 mb-4">Profession</p>
                <div className="flex justify-center space-x-4 text-blue-600">
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center p-10 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold">Now Let’s Grow Yours</h1>
          <p className="mt-4">
            This powerful platform helps you accelerate growth and scale like never before. Join us for the next chapter.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg">
            Button
          </button>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
        <Image width={500} height={500}
        src="/background.png"
       alt="Placeholder"
       className="w-full rounded-lg"
       />

        </div>
       </section>
         {/* Logos Section */}
                  <section className="bg-gray-50 py-10">
                    <div className="max-w-7xl mx-auto text-center">
                       <h3 className="text-2xl font-semibold mb-6">Big Companies Are Here</h3>
                       <p className="text-gray-600 mb-8">
                       
                          Problems trying to resolve the conflict between<br />
                          the two major realms of classical physics: Newtonian mechanics.
                         </p>

                       
                     <div className="flex justify-center gap-6 flex-wrap">
                    <Image width={100} height={100} src="/fa-brands-1.png" alt="Tool 1" className="h-8" />
                   <Image width={100} height={100} src="/fa-brands-2.png" alt="Tool 2" className="h-8" />
                   <Image width={100} height={100} src="/fa-brands-3.png" alt="Stripe" className="h-8" />
                   <Image width={100} height={100} src="/fa-brands-4.png" alt="AWS" className="h-8" />
                    <Image width={100} height={100} src="/fa-brands-5.png" alt="Company 5" className="h-8" />
       </div>
       </div>
       </section>
      {/* Footer Section */}
      <footer className="bg-white text-black py-10">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
               <div>
                    <h3 className="font-bold text-lg mb-3">Company Info</h3>
                   <ul className="space-y-2 text-black">
                       <li>About Us</li>
                       <li>Carrier</li>
                       <li>We are hiring</li>
                       <li>Blog</li>
                         </ul>
                         </div>
                     <div>
                                  <h3 className="font-bold text-lg mb-3">Legal</h3>
                                 <ul className="space-y-2 text-black">
                                 <li>Terms of Service</li>
                                 <li>Privacy Policy</li>
                                 <li>Cookies</li>
                                       </ul>
                                    </div>

                                    <div>
                      <h3 className="font-bold text-lg mb-3">Features</h3>
                        <ul className="space-y-2 text-black">
                               <li>Analytics</li>
                           <li>Marketing Tools</li>
                         <li>Integrations</li>
        </ul>
          </div>
          <div>
          <h3 className="font-bold text-lg mb-3">Get in Touch</h3>
         <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>

  <div className="border-t border-gray-300 mt-10 pt-6 text-center">
    <p className="text-black">
      &copy; 2024 Bandage. All rights reserved. Designed for quality and reliability.
        </p>
          </div>
             </footer>

           </div>
           );
               };

export default AboutPage;
