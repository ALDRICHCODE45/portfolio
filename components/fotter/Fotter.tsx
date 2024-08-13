import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { MagicButton } from "../ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          ¿Listo para llevar <span className="text-purple"> tu </span>
          presencia digital al siguiente nivel?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          ¡Contáctame hoy mismo y hablemos sobre cómo puedo ayudarte a alcanzar
          tus objetivos!
        </p>
        <a
          href="https://www.linkedin.com/in/aldrich-flores-vazquez-446b7b223/"
          target="_blank"
        >
          <MagicButton
            title="Contáctame."
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
