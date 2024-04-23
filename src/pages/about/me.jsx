import FlipCard from '@/components/_flipcard';
import Footer from '@/components/_footer';
import Header from '@/components/_header';
import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="relative">
          <FlipCard />
        </div>
        <div className="max-w-md absolute" style={{ right: 'calc(65% + 0.5rem)', top: 'calc(45% - 0.5rem)' }}>
          <h1 className='text-4xl font-bold mb-4'>
            That I hope to create
          </h1>
          <p className="text-base leading-relaxed text-gray-700">
            Each card represents a prototype idea for my project. <br /> 
            These cards will form a list, and each card added to <br />
            the list will represent a place we have added.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
