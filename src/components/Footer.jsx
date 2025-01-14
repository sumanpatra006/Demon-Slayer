import React from "react";
export function Footer() {
  return (
    <div className="flex flex-row justify-center w-full h-[10vh] bg-slate-900">
      <div className="flex flex-row justify-center w-[96%]">
      <span className="flex flex-row items-center w-[32%]"><img src="/images/Enigma.png" alt="enigma logo" className="h-[60%]"/></span>
      <span className="flex flex-row items-center justify-center text-gray-400 w-[32%] text-2xl"><span>Made with</span><span className="px-2 font-Pixel-Army flex flex-row pt-[6px] text-green-400">Enigma</span></span>
      <span className="flex flex-row items-center justify-end text-gray-400 w-[32%]">&copy; Copyright 2025, All Rights Reserved</span>
    </div>
    </div>
  );
}

