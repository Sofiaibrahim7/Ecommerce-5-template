import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="py-4 bg-gray-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <Image src="/myapp/src/images/fa-brands-1.png" alt="Logo" width={150} height={40} />
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
          <button className="md:hidden text-gray-700">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative w-full h-64">
              <Image src="/myapp/src/card-cover-5.jpg" alt="Hero 1" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full h-64">
              <Image src="/myapp/src/card-cover-6.jpg" alt="Hero 2" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full h-64">
              <Image src="/myapp/src/card-cover-7-1.jpg" alt="Hero 3" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full h-64">
              <Image src="/myapp/src/card-cover-7-2.jpg" alt="Hero 4" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="border rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <div className="relative w-40 h-40">
                  <Image
                    src={`/product${i + 1}.jpg`}
                    alt={`Product ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-lg font-medium mt-4">Product Name</h3>
                <p className="text-gray-500 mt-2">$100.00</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <button className="bg-gray-200 px-4 py-2 rounded-l-lg">Prev</button>
            <button className="bg-gray-200 px-4 py-2">1</button>
            <button className="bg-gray-200 px-4 py-2">2</button>
            <button className="bg-gray-200 px-4 py-2 rounded-r-lg">Next</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Your Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
