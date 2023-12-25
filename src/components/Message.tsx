"use client";

import { gradients } from "@/lib/data";
import palette from "../app/assets/color-palette-paint-svgrepo-com.svg";
import camera from "../app/assets/camera.webp";
import { toPng } from "html-to-image";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface Props {
  message: string;
}

const Message = ({ message }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [gradient, setGradient] = useState(gradients[0]);
  const changeGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    const newGradient = gradients[randomIndex];
    setGradient(newGradient);
  };

  const clickImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Ryzz-${message}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref, message]);

  return (
    <div>
      <div ref={ref} className="p-2">
        <div className="flex flex-col text-center bg-white shadow-md shadow-purple-200 m-3 rounded-2xl pb-2">
          <div
            className={`${gradient} mont text-lg md:py-7 md:text-xl py-5 px-3 font-semibold text-white rounded-t-2xl tracking-tight leading-tight relative`}
          >
            Send me anonymous messages !
            <p className="absolute __className_938c5f logo ryzz text-zinc-50/60 text-sm right-2 bottom-1">
              R
            </p>
          </div>
          <p className="lato p-5 lg:px-7 text-lg md:text-xl font-semibold text-zinc-800 overflow-y-scroll md:max-h-96 max-h-[400px] leading-tight ">
            {message}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-14">
        <Image
          src={palette}
          alt="🎨"
          width={25}
          onClick={changeGradient}
          className="active:scale-95 select-none active:rotate-12 cursor-pointer"
        />
        <Image
          src={camera}
          alt="📸"
          width={30}
          onClick={clickImage}
          className="active:scale-95 select-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Message;
