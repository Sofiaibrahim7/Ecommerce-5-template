'use client';
import Image from 'next/image';
import Navbar from '../components/navbar';
import CardText from '../components/cards-text';
import pic9 from '@/images/card-cover-7 (2).jpg';
import pic10 from '@/images/card-cover-7.jpg';
import pic11 from '@/images/card-cover-5.jpg';
import pic12 from '@/images/card-cover-6.jpg';
import pic13 from '@/images/card-cover-7 (1).jpg';

export default function Shop() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      
      {/* Shop Title */}
      <div className="container mx-auto px-4 py-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Shop</h2>
        <div className="flex justify-center items-center space-x-2 text-gray-500 text-sm">
          <span>Home</span>
          <Image src="/arrow.svg" alt="arrow" width={8} height={6} />
          <span className="text-gray-400">Shop</span>
        </div>
      </div>

      {/* Category Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Image key={index} src={`/category-${index + 1}.jpg`} alt={`Category ${index + 1}`} width={200} height={200} className="rounded-lg object-cover w-full" />
        ))}
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-lg font-semibold text-gray-700">Showing all 12 results</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {[pic9, pic10, pic11, pic12, pic13].map((pic, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={pic} alt={`Product ${index + 1}`} width={300} height={400} className="w-full h-64 object-cover" />
              <CardText />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center py-6">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700">First</button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12 py-6 text-center">
        <p className="text-gray-600">&copy; 2025 Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
