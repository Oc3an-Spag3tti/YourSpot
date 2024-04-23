import React from 'react';

const Letter = ({ letter }) => (
  <div className="wrapper cursor-pointer w-auto h-[180px] flex items-center content-center text-[7vw] font-[sans-serif_italic]">
    <h1 className="letter h-auto relative [text-shadow:-6px_2px_7px_rgba(0,0,0,0)] text-[#0c0c0c] top-[0]">{letter}</h1>
    <h1 className="shadowl text-transparent absolute [transition:0.5s] [text-shadow:none] z-0">{letter}</h1>
  </div>
);

const Home = () =>   (
    <div className="csv body min-h-screen flex justify-center items-center bg-[#cOcOcO]">
      <div className="text-container flex flex-row content-center justify-center gap-[15px] w-4/5">
        <Letter letter="Y" />
        <Letter letter="O" />
        <Letter letter="U" />
        <Letter letter="R" />
        <div className="w-6"></div>
        <Letter letter="S" />
        <Letter letter="P" />
        <Letter letter="O" />
        <Letter letter="T" />
      </div>
    </div>
  );


export default Home;
