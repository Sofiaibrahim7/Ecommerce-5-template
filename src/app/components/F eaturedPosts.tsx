import React from 'react';
import Image from 'next/image';

const FeaturedPosts = () => {
  // Creating an array of posts with image sources (relative paths to public folder)
  const posts = [
    {
      id: 1,
      image: "/images/unsplash_hHdHCfAifHU (2).png",  // Replace with actual image path
      alt: "Post 1",
      title: "Loudest à la Madison #1",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      width: 500,  // Add the width for your image
      height: 300, // Add the height for your image
    },
    {
      id: 2,
      image: "/images/unsplash_tVEqStC2uz8@2x.png",  // Replace with actual image path
      alt: "Post 2",
      title: "The integral of focus",
      description: "Exploring new trends in ergonomics and productivity.",
      date: "18 April 2021",
      comments: "15 comments",
      width: 500,
      height: 300,
    },
    {
      id: 3,
      image: "/images/fixed-height@2x.png",  // Replace with actual image path
      alt: "Post 3",
      title: "Breaking the norms of technology",
      description: "How technology shapes our work life.",
      date: "20 April 2021",
      comments: "12 comments",
      width: 500,
      height: 300,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Featured Posts</h2>
      <p className="text-gray-500 text-center mb-8">
        Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics.
      </p>
      
      {/* Grid Layout for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.alt}
              width={post.width}
              height={post.height}
              className="w-full h-auto object-cover" // Ensuring the image is responsive and maintains aspect ratio
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-xs text-gray-400">{post.date}</p>
                <p className="text-xs text-gray-400">{post.comments}</p>
              </div>
              <button className="text-[#23a6f0] text-sm mt-2">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
