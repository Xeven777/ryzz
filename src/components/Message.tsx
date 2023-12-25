"use client";

import { gradients } from "@/lib/bg";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import { Camera, Palette } from "lucide-react";
import { useState, useRef, useCallback } from "react";

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
  }, [ref,message]);

  return (
    <div>
      <div ref={ref} className="p-2">
        <div className="flex flex-col text-center bg-white shadow-md shadow-purple-200 m-3 rounded-2xl pb-2">
          <h1
            className={`${gradient} mont md:py-6 md:text-xl py-4 px-2 font-semibold text-white rounded-t-2xl tracking-tight`}
          >
            Send me anonymous messages....
          </h1>
          <p className="lato py-4 lg:px-6 px-4 text-lg overflow-y-scroll md:max-h-96 max-h-[400px] leading-tight ">
            {message}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-14">
        <Palette color="purple" onClick={changeGradient} />
        <Camera color="blue" onClick={clickImage} />
      </div>
    </div>
  );
};

export default Message;
