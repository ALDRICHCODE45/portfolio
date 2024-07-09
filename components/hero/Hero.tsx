import { type ReactElement } from "react";
import { Spotlight } from "../ui/SopLight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { MagicButton } from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export interface HeroProps {}

export function Hero({}: HeroProps): ReactElement {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Desarrollo Web Dinámico Full Stack
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="De ideas a experiencias de usuario excepcionales"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hola, soy Aldrich, un Desarrollador Full Stack con sede en México.
          </p>
          <a
            href="https://www.linkedin.com/in/aldrich-flores-vazquez-446b7b223"
            target="_blank"
          >
            <MagicButton
              title="Escribeme!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
