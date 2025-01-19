import React from "react";

export function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full h-[auto] bg-slate-900 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-[96%] max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <span className="flex items-center justify-center md:justify-start w-full md:w-[32%] md:px-4 lg:px-0 mb-2 md:mb-0 ">
          <img
            src="/images/Enigma.png"
            alt="enigma logo"
            className="h-10 md:h-12 lg:h-14 max-h-16"
          />
        </span>

        {/* Text Section */}
        <span className="flex items-center justify-center text-gray-400 w-full md:w-[32%] text-center text-lg md:text-xl lg:text-2xl">
          <span>Made with</span>
          <span className="px-2 font-Pixel-Army flex items-center text-green-400 pt-[6px]">
            Enigma
          </span>
        </span>

        {/* Copyright Section */}
        <span className="flex items-center justify-center md:justify-end  text-gray-400 w-full md:w-[32%] text-sm lg:text-base">
          &copy; Copyright 2025, All Rights Reserved
        </span>
      </div>
    </div>
  );
}
