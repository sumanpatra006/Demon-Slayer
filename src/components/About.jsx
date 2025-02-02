import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-full relative overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">

        <AnimatedTitle
          title="EXPLORE THE POWER OF  AN  UNBREAKABLE SIBLING BOND 🧩"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Journey of Bonds begins — an epic tale of sibling love.</p>
          <p className="text-gray-600">
          A connection that transcends all obstacles, uniting hearts with unyielding strength and courage.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="images/nezuko-3.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;