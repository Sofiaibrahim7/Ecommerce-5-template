import Image from "next/image";

const ProductListPage = () => {
  const products = [
    { id: 1, name: "Graphic T-Shirt", price: "$20", rating: 4 },
    { id: 2, name: "Casual Hoodie", price: "$30", rating: 5 },
    { id: 3, name: "Denim Jacket", price: "$50", rating: 4 },
    { id: 4, name: "Classic Shirt", price: "$25", rating: 3 },
    { id: 5, name: "Cotton Sweater", price: "$40", rating: 5 },
    { id: 6, name: "Relaxed Jeans", price: "$45", rating: 4 },
    { id: 7, name: "Oversized Jacket", price: "$60", rating: 5 },
    { id: 8, name: "Polo Shirt", price: "$22", rating: 4 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/components/shop" className="text-gray-600 hover:text-blue-600">Shop</a>
            <a href="/components/about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/components/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-10">
        <h2 className="text-4xl font-bold mb-4">Shop Our Latest Products</h2>
        <p className="text-lg">
          Explore our range of trendy and comfortable clothing for every occasion.
        </p>
      </section>

      {/* Product Listing */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Placeholder for Product Image */}
              <div className="relative w-full h-64">
                <Image
                  src="/path-to-your-image.jpg" // Replace this with your image path
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-blue-600 font-semibold">{product.price}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Bandage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductListPage;