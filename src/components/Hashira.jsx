import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Cover } from "./Cover";
import { hashiras } from '../../constants';

export default function Hashira() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <>
          <section className="text-black h-[70vh] w-full bg-[#D2D1D3]  grid place-content-center ">
          <div className=' text-center font-anime py-10 text-[2.5rem]'>Our blades dance with purpose. <br />We are the <Cover> Hashiras!</Cover> </div>
          </section>
        </>

        <section className="text-white w-full bg-slate-900">
          {hashiras.map((hashira, i) => {
            const targetScale = 1 - (hashiras.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                src={hashira?.src}
                name={hashira?.name}
                designation={hashira?.designation}
                quote={hashira?.quote}
                color={hashira?.color}
                progress={scrollYProgress}
                range={[i * 0.11, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
export const Card = ({
  i,
  src,
  name,
  quote,
  designation,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 15}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[550px] w-[70%] rounded-lg p-10 origin-top`}
      >
        <h2 className="text-[2.5rem]  text-black text-center font-zentry tracking-widest">{name}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`flex flex-col w-[40%] top-[7%] relative text-black gap-4`}>
            <p className="text-[1.8rem] font-Sleepy-Moody font-semibold">{designation}</p>
            <p className="text-[1.3rem] font-circular-web">{quote}</p>
          </div>

          <div
            className={`relative w-[60%] h-[80%] rounded-lg overflow-hidden`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={src} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};