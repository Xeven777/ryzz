"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  Sparkle,
  Twitter,
} from "lucide-react";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import img1 from "@/app/assets/cartoon1.png";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const InstallBtn = dynamic(() => import("@/components/Installbtn"), {
  ssr: false,
  loading: () => <p>Install Now!🔥</p>,
});
import { cn } from "@/lib/utils";
import { mono } from "@/lib/font";
import { useReward } from "react-rewards";

const HeroSection = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    lifetime: 200,
    elementCount: 100,
    spread: 70,
    zIndex: 9999,
  });

  return (
    <>
      <section className="relative flex items-center flex-col bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 rounded-3xl min-h-[700px] md:min-h-[770px] overflow-hidden text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f01a_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f01b_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <Sparkle
          className="size-16 fill-accent text-accent absolute md:mt-0 mt-16 md:top-24 right-2 md:left-20 animate-shake"
          strokeWidth={"1px"}
        />
        <Sparkle
          className="size-16 fill-accent text-accent hidden md:block absolute bottom-16 right-20 animate-shake"
          strokeWidth={"1px"}
        />
        <div className="md:h-28 bg-slate-200/20 w-full absolute top-0">
          <VelocityScroll
            text="Share your thoughts anonymously"
            default_velocity={4}
            className="text-center text-4xl font-bold tracking-tight text-white md:text-7xl leading-relaxed"
          />
        </div>

        <div className="md:absolute mt-28 left-4 md:bottom-20 px-6 max-w-sm leading-normal flex flex-col gap-2 md:gap-4 z-10">
          <h2 className="logo ryzz text-5xl md:text-8xl select-none px-1">
            Ryzz
          </h2>
          <p className="select-none text-base md:text-xl">
            Create an account and start getting anonymous & secret messages from
            your friends!!🤩🤪🤫
          </p>
          <InstallBtn className="w-fit md:mx-2 mt-1 text-foreground" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0"
        >
          <Image
            src={img1}
            alt="Cartoon character"
            width={720}
            fetchPriority="high"
            loading="eager"
            quality={85}
            height={800}
            className="w-full max-w-[720px] mx-auto img-drop-shadow select-none pointer-events-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-4 w-full text-center"
        >
          <Link href={"/sign-up"}>
            <Button
              disabled={isAnimating}
              onClick={reward}
              size="lg"
              className="text-lg md:text-xl bg-accent text-accent-foreground hover:bg-accent/90 -rotate-3 scale-125 duration-500 pl-20 pr-10 hover:pr-20 hover:pl-10 rounded-full active:rotate-0 py-4 md:py-8 group"
            >
              {" "}
              <span id="rewardId" />
              Start Now
              <div className="bg-accent-foreground p-3 md:p-5 rounded-full absolute left-1 group-hover:translate-x-36 transition-all duration-500">
                <ArrowRight color="white" size={40} className="size-8" />
              </div>
            </Button>
          </Link>
        </motion.div>
        <div className="hidden md:grid grid-cols-2 gap-4 border border-slate-200/15 rounded-3xl p-2 absolute top-32 gap-y-2 right-12">
          <div className="bg-accent aspect-square rounded-full size-11 flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 duration-300">
            <p className="logo text-3xl pt-1 text-accent-foreground">R</p>
          </div>
          <div className="bg-slate-200/15 aspect-square rounded-full size-11 flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 duration-300">
            <FacebookIcon color="white" />
          </div>
          <div className="bg-slate-200/15 aspect-square rounded-full size-11 flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 duration-300">
            <InstagramIcon color="white" />
          </div>
          <div className="bg-slate-200/15 aspect-square rounded-full size-11 flex items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 duration-300">
            <Twitter color="white" />
          </div>
        </div>
        <div className="absolute top-1/2 right-12 hidden md:flex flex-col gap-4 text-end">
          <div>
            <h3 className={cn(mono.className, "text-4xl font-bold")}>100+</h3>
            <p>Users</p>
          </div>
          <div>
            <h3 className={cn(mono.className, "text-4xl font-bold")}>2300+</h3>
            <p>Messages</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
