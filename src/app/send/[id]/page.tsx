import Form from "@/components/Form";
import { VenetianMask } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { clerkClient } from "@clerk/nextjs";
import InstallBtn from "@/components/Installbtn";
type Props = {
  params: { id: string };
};

const SendMessages = async ({ params: { id } }: Props) => {
  const user = await clerkClient.users.getUser(id);
  const initials =
    user.firstName && user.lastName
      ? user.firstName[0] + user.lastName[0]
      : "RZ";
  const username = user.firstName === null? "RyzzUser" : user.firstName;
  const avImg = user.hasImage
    ? user.imageUrl
    : "https://i.postimg.cc/Kcp57cXf/apple-touch-icon.png";

  return (
    <div className="text-white flex min-h-screen flex-col items-center justify-center pt-16 pb-4 px-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 text-center relative">
      <div className="fixed top-0 md:right-40">
        <InstallBtn />
      </div>
      <h2 className="text-6xl md:text-9xl font-bold __className_938c5f p-2 ryzz logo">
        Ryzz
      </h2>
      <div className="bg-white/90 flex gap-3 px-4 py-3 mont text-zinc-900 mt-3 sm:w-5/12 min-w-[220px] w-full rounded-t-2xl items-center leading-tight text-start">
        <Avatar>
          <AvatarImage src={avImg} alt={initials} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="md:text-base text-sm text-zinc-600">@{username}</p>
          <p className="font-semibold md:text-lg">
            Send anonymous messages here 💌
          </p>
        </div>
      </div>

      <Form userId={id} />

      <div className="flex flex-col mt-20 text-center">
        <h1 className="font-medium mont md:text-xl max-w-prose">
          What are you waiting for? Start getting anonymous messages now! 🔥
        </h1>
        <Link
          href="/"
          target="__blank"
          className="animate-shake p-2 px-6 mt-5 mx-auto rounded-md bg-primary text-primary-foreground text-center "
        >
          Lets Goo!🚀
        </Link>
      </div>

      <Link
        href="/about"
        title="About Ryzz"
        className="absolute bg-purple-700/60 bottom-2 right-1 p-2 rounded-full cursor-pointer"
      >
        <VenetianMask color="white" size={28} />
      </Link>
    </div>
  );
};

export default SendMessages;
