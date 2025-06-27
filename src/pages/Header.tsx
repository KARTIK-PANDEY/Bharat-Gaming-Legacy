import React from "react";

export default function Header() {
  return (
    <div className="h-[50vh] bg-gradient-to-br from-[#FF9933] via-[#FFFFFF] to-[#138808] flex items-center justify-center text-center px-4">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-[#800000] max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#800000] mb-4">
           Welcome to Bharat Gaming 
        </h1>
        <p className="text-lg md:text-xl text-[#1A237E] font-medium">
          Dive into the spirit of India with every game. Powered by tradition,
          crafted with passion.
        </p>
      </div>
    </div>
  );
}
