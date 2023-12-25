import Form from "@/components/Form";
import { VenetianMask } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { clerkClient } from "@clerk/nextjs";
type Props = {
  params: { id: string };
};

const SendMessages = async ({ params: { id } }: Props) => {
  const user = await clerkClient.users.getUser(id);
  const initials =
    user.firstName && user.lastName
      ? user.firstName[0] + user.lastName[0]
      : "RZ";

  return (
    <div className="text-white flex min-h-screen flex-col items-center justify-center pt-16 pb-4 px-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 text-center relative">
      <h2 className="text-6xl md:text-8xl font-bold __className_938c5f p-2 ryzz logo">
        Ryzz
      </h2>
      <div className="bg-white/90 flex gap-3 px-4 py-3 mont text-zinc-900 mt-3 sm:w-5/12 min-w-[220px] w-full rounded-t-2xl items-center leading-tight text-start">
        <Avatar>
          <AvatarImage src={user.imageUrl} alt={initials} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-zinc-600">@{user.firstName}</p>
          <p className="font-semibold">Send anonymous messages here 💌</p>
        </div>
      </div>

      <Form userId={id} />

      <div className="flex flex-col mt-20 text-center">
        <h1 className="font-medium mont">
          What are you waiting for? Start getting anonymous messages now! 🔥
        </h1>
        <Link
          href="/"
          target="__blank"
          className="animate-shake py-2 mt-5 mx-auto rounded-md bg-primary text-sm text-primary-foreground w-[110px] text-center "
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
