'use client';

import Image from 'next/image';

export default function Blog() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/components/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="/components/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/components/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="/components/product" className="text-gray-700 hover:text-blue-600">Product</a>
            <a href="/components/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
          </nav>
        </div>
      </header>

      {/* Bestseller Products Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Bestseller Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <Image src="/placeholder.jpg" alt="Product" width={500} height={300} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-medium mt-4">Graphic Design</h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="text-green-500 font-bold mt-2">$6.48</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <Image src="/placeholder.jpg" alt="Floating Phone" width={600} height={400} className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div>
          <div className="flex-1 ml-0 md:ml-10 mt-6 md:mt-0">
            <h3 className="text-2xl font-semibold">Floating Phone</h3>
            <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ (10 Reviews)</p>
            <div className="text-xl text-green-500 font-bold mt-4">$1,139.33</div>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
              Select Options
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white">Company Info</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Career</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Features</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">Business Marketing</a></li>
              <li><a href="#" className="hover:text-white">Live Chat</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg"
              />
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
