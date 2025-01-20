import Image from "next/image";

export default function Product() {
    return (
      <div className="font-sans">
        {/* Navbar */}
        <header className="bg-gray-100 border-b">
          <nav className="container mx-auto flex justify-between items-center p-6">
            <div className="text-lg font-bold">Bandage</div>
            <ul className="flex space-x-6">
              <li className="hover:text-blue-600"><a href="components/shop">Shop</a></li>
              <li className="hover:text-blue-600"><a href="/components/about">About</a></li>
              <li className="hover:text-blue-600"><a href="/components/contact">Contact</a></li>
              <li className="hover:text-blue-600"><a href="components/pages">Pages</a></li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
          </nav>
        </header>
  
        {/* Shop Section */}
        <section className="container mx-auto my-8">
          <h1 className="text-3xl font-semibold text-center mb-6">Shop</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-200 p-4 rounded shadow">
              <Image width={500} height={500}
                src="/card-cover-5.jpg"
                alt="Product 1"
                className="rounded"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <Image width={500} height={500} 
                src="/card-cover-6.jpg"
                alt="Product 2"
                className="rounded"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <Image width={500} height={500}
                src="/card-cover-7.jpg"
                alt="Product 3"
                className="rounded"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <Image width={500} height={500}
                src="/card-cover-7-1.jpg"
                alt="Product 4"
                className="rounded"
              />
            </div>
            
          </div>
        </section>
      




  
        {/* Partners Section */}
        <section className="bg-gray-50 py-8">
       <div className="container mx-auto flex justify-center gap-4 flex-wrap">
       <Image width={100} height={100} src="/fa-brands-1.png" alt="Shopify" className="h-8" />
       <Image width={100} height={100} src="/fa-brands-2.png" alt="Lyft" className="h-8" />
       <Image width={100} height={100} src="/fa-brands-3.png" alt="Stripe" className="h-8" />
       <Image width={100} height={100} src="/fa-brands-4.png" alt="AWS" className="h-8" />
  </div>
</section>

  

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold mb-4">Shopping Info</h4>
              <ul>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get in Touch</h4>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 mb-2 rounded border"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    );
}
