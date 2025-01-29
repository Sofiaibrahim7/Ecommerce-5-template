"use client";
import { useState } from "react";
import Image from "next/image";

export default function Product() {
  const products = [
    { id: 1, image: "/images/fixed-height (2).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 2, image: "/images/fixed-height (3).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 3, image: "/fixed-height.png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 4, image: "/images/product-cover-5@2x.png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 5, image: "/images/fixed-height (4).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 6, image: "/images/fixed-height (5).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 7, image: "/images/fixed-height (6).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 8, image: "/images/product-cover-5 (2).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 9, image: "/images/fixed-height (7).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 10, image: "/images/fixed-height (8).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 11, image: "/images/fixed-height (9).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 12, image: "/images/fixed-height (10).png", title: "Graphic Design", subtitle: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
  ];

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-gray-100 border-b">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <div className="text-lg font-bold">Bandage</div>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-600"><a href="/components/pages/shop">Shop</a></li>
            <li className="hover:text-blue-600"><a href="/components/about">About</a></li>
            <li className="hover:text-blue-600"><a href="/components/contact">Contact</a></li>
            <li className="hover:text-blue-600"><a href="/components/pages">Pages</a></li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </nav>
      </header>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Product Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="relative">
                <Image
                  className="w-full h-64 object-top"
                  src={product.image}
                  alt={product.title}
                  width={288}
                  height={288}
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{product.subtitle}</p>
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                  <span className="ml-2 text-lg font-semibold text-green-500">{product.newPrice}</span>
                </div>
                <div className="flex space-x-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500 border border-gray-200"></span>
                  <span className="w-5 h-5 rounded-full bg-green-500 border border-gray-200"></span>
                  <span className="w-5 h-5 rounded-full bg-orange-500 border border-gray-200"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded ${currentPage === 1 ? "text-gray-400 border-gray-300" : "text-blue-500 border-blue-500"}`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 border rounded ${currentPage === index + 1 ? "text-white bg-blue-500 border-blue-500" : "text-gray-500 border-gray-300"}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded ${currentPage === totalPages ? "text-gray-400 border-gray-300" : "text-blue-500 border-blue-500"}`}
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
                    <Image width={100} height={100} src="/fa-brands-1.png" alt="Tool 1" className="h-8" />
                   <Image width={100} height={100} src="/fa-brands-2.png" alt="Tool 2" className="h-8" />
                   <Image width={100} height={100} src="/fa-brands-3.png" alt="Stripe" className="h-8" />
                   <Image width={100} height={100} src="/fa-brands-4.png" alt="AWS" className="h-8" />
                    <Image width={100} height={100} src="/fa-brands-5.png" alt="Company 5" className="h-8" />
                    <Image width={100} height={100} src="/images/fa-brands-6.png" alt="Alien" className="h-8" />
       </div>
       </div>

     
        


















          





  
  );
}
