 
import Image from 'next/image';

export default function HomePage() {
  const teamMembers = [
    { name: 'John Doe', profession: 'Designer', image: 'media (2).png' },
    { name: 'Jane Smith', profession: 'Developer', image: 'media (1).png' },
    { name: 'Alice Brown', profession: 'Manager', image: 'media (4).png' },
    { name: 'Bob Johnson', profession: 'Marketer', image: 'media (5).png' },
    { name: 'Sarah Lee', profession: 'Writer', image: 'media (6).png' },
    { name: 'Mike Wilson', profession: 'Photographer', image: 'media (7).png' },
    { name: 'Emily Johnson', profession: 'Teacher', image: 'media (8).png' },
    { name: 'Ella Roberts ', profession: 'Fashion Designer', image: 'media (9).png' },
    { name: 'Grace Taylor', profession: 'Artist', image: 'media (10).png' },
    { name: 'Ava Davis', profession: 'NewsReporter', image: 'medium-shot-reporter-uk.jpg' },
    { name: 'Liam Johnson', profession: 'Data Scientist', image: 'elegant-old-man-sunny-autumn-park.jpg' },
    { name: 'James Wilson', profession: 'UX/UI Designer', image: 'young-cheeful-man-smoking-cigarette-smiling-cheerfully-looking-away.jpg' },
  ];

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Website Name</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="/components/product" className="text-gray-600 hover:text-gray-800">Product</a>
            <a href="/components/pricing" className="text-gray-600 hover:text-gray-800">Pricing</a>
            <a href="/components/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-4xl font-bold mb-4">Innovation tailored for you</h2>

        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6">
          <ul className="flex justify-center items-center space-x-2 text-gray-600">
            <li>
              <a href="/" className="text-blue-800 hover:underline">
                Home
              </a>
            </li>
            <li className="text-gray-400">{'>'}</li>
            <li>
              <span className="text-gray-400">Innovation</span>
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="h-64 relative">
            <Image
              src="/hero-picture.png"
              alt="Hero Image 1"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="h-64 relative">
            <Image
              src="/images/hero2.jpg"
              alt="Hero Image 2"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="h-64 relative">
            <Image
              src="/images/hero3.jpg"
              alt="Hero Image 3"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="min-h-screen bg-gray-50">
        <header className="text-center py-12 bg-white shadow">
          <h1 className="text-4xl font-bold text-gray-800">Meet Our Team</h1>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden text-center"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={`/images/${member.image}`}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-lg text-gray-800">{member.name}</h2>
                  <p className="text-gray-600">{member.profession}</p>
                </div>
                <div className="flex justify-center space-x-4 pb-4">
                  <a href="myapp/public/images/facebook.png" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="myapp/public/images/ant-design_instagram-outlined.png" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="myapp/public/images/ant-design_twitter-outlined.png" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white text-center py-12">
        <h2 className="text-2xl font-semibold">Start your 14 days free trial</h2>
        <p className="mt-2">Sign up and enjoy all the benefits for free!</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100">
          Try it free now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 text-sm">
            Made with love by Sofia Ibrahim. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
