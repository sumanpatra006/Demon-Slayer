import React from "react";
import { AnimatedTooltip } from "./AnimmatedToolTip";
import { Developers } from "../../constants";

export function Developer() {
  return (
    (<div className="flex flex-col justify-center py-16 w-full h-[20vh] sm:h-[30vh]">
      <p className="text-center pb-7 sm:pb-14 font-Pixel-Army text-2xl sm:text-3xl text-green-950">Meet Our Developers</p>
      <div className="flex flex-row items-center justify-center">
      <AnimatedTooltip items={Developers} />
      </div>
    </div>)
  );
}


