import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
        <nav className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-gray-800">Home</a>
          <a href="#" className="hover:text-gray-800">Product</a>
          <a href="#" className="hover:text-gray-800">Pricing</a>
          <a href="#" className="hover:text-gray-800">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Login</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Become a member
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col mt-32 lg:flex-row justify-between items-center px-8 lg:px-16 py-16 space-y-8 lg:space-y-0">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in touch today!</h2>
          <p className="text-gray-600 mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <p className="text-gray-800 font-medium mb-2">Phone: +451 215 215</p>
          <p className="text-gray-800 font-medium mb-6">Fax: +451 215 215</p>
          <div className="flex space-x-4 text-gray-600">
          <div className="flex space-x-4 text-gray-600">
   <a href="myapp/pulogos_twitter.png" className="hover:text-gray-800"> 
    <Image
      src="/twitter.png" // Replace with your actual image path
      alt="Twitter"
      width={24}
      height={24}
      className="rounded"
    />
         </a> 
       <a href="http://facebook.com" className="hover:text-gray-800">
        <Image
         src="/facebook.png"// Replace with your actual image path
         alt="Facebook"
         width={24}
         height={24}
         className="rounded"
     />
        </a>
        <a href="https://instagram.com" className="hover:text-gray-800">
        <Image
         src="/Vector (5).png"  // Replace with your actual image path
            alt="Instagram"
        width={24}
        height={24}
        className="rounded"
        />
       </a>
        <a href="https://linkedin.com" className="hover:text-gray-800">
       <Image
       src= "/Vector (6).png" // Replace with your actual image path
       alt="LinkedIn"
       width={24}
       height={24}
        className="rounded"
    />
  </a>
</div>   
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <Image
            src="/none.png"
            alt="Contact Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Responsive Contact Section */}
      
    <div className="bg-white min-h-screen px-8 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-gray-500 uppercase tracking-wider">
          Visit Our Office
        </h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          We help small businesses with big ideas
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="text-center border border-gray-200 rounded-lg p-6 shadow-md">
          <div className="flex justify-center mb-4">
            <Image
              src="/Vector (2).png" // Replace with your phone icon image path
              alt="Phone"
              width={50}
              height={50}
            />
          </div>
          <p className="text-gray-800 font-semibold text-lg">
            georgia.young@example.com
          </p>
          <p className="text-gray-600 mb-6">georgia.young@ple.com</p>
          <p className="text-gray-700 font-medium mb-2">Get Support</p>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition">
            Submit Request
          </button>
        </div>

        {/* Card 2 */}
        <div className="text-center bg-blue-900 text-white rounded-lg p-6 shadow-md">
          <div className="flex justify-center mb-4">
            <Image
                src="/Vector.png"  // Replace with your location icon image path
               alt="Location"
               width={50}
               height={50}
            />
          </div>
          <p className="text-lg font-semibold">georgia.young@example.com</p>
          <p className="mb-6">georgia.young@ple.com</p>
          <p className="font-medium mb-2">Get Support</p>
          <button className="border border-blue-400 px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Submit Request
          </button>
        </div>

        {/* Card 3 */}
        <div className="text-center border border-gray-200 rounded-lg p-6 shadow-md">
          <div className="flex justify-center mb-4">
            <Image
              src="/Vector (1).png" // Replace with your email icon image path
              alt="Email"
              width={50}
              height={50}
            />
          </div>
          <p className="text-gray-800 font-semibold text-lg">
            georgia.young@example.com
          </p>
          <p className="text-gray-600 mb-6">georgia.young@ple.com</p>
          <p className="text-gray-700 font-medium mb-2">Get Support</p>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  



          {/* Card 2 */}
          <div className="text-center bg-blue-900 text-white rounded-lg p-6 shadow-sm">
            <div className="text-blue-400 text-4xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="font-semibold mb-2">georgia.young@example.com</p>
            <p className="mb-6">georgia.young@ple.com</p>
            <button className="border border-blue-400 px-4 py-2 rounded hover:bg-blue-700">
              Submit Request
            </button>
          </div>

          {/* Card 3 */}
          <div className="text-center border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="text-gray-800 font-semibold mb-2">
              georgia.young@example.com
            </p>
            <p className="text-gray-600 mb-6">georgia.young@ple.com</p>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
              Submit Request
            </button>
          </div>
        </div>
    
  );
}
