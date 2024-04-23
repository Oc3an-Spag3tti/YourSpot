import React from 'react';
import Header from '@/components/_header';
import Footer from '@/components/_footer';
// import authorImage from '@/assets/author.jpg'; // Import your author image

const AboutContacts = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-3 py-4"> {/* Reduced padding */}
            <div className="mb-2">
              <img src="https://i.pinimg.com/564x/25/fa/ba/25faba330042bd65dbe3274fc7c1be00.jpg" alt="Author" className="w-full h-auto rounded-t-lg" />
            </div>
            <h1 className="text-lg font-bold mb-1">Author Information</h1> {/* Reduced font size */}
            <p className="text-sm mb-1"> {/* Reduced font size */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi.
            </p>
            <h2 className="text-xs font-bold mb-1">Contact</h2> {/* Reduced font size */}
            <ul className="list-disc ml-2">
              <li>Email: author@example.com</li>
              <li>Phone: +1234567890</li>
              <li>Address: 123 Author St, City, Country</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutContacts;

