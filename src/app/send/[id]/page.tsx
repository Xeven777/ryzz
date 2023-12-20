import Form from "@/components/Form";
import { VenetianMask } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  params: { id: string };
};

const SendMessages = ({ params: { id } }: Props) => {
  return (
    <div className="text-white flex min-h-screen flex-col items-center justify-center py-24 px-4 gap-3 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 text-center">
      <h2 className="text-4xl md:text-6xl font-bold __className_938c5f ryzz">Ryzz</h2>
      <p className="text-white/90 px-2 mont">Send anonymous messages here </p>
      <Form userId={id} />

      <div className="flex flex-col mt-20 text-center">
        <h1 className="font-medium mont">
          What are you waiting for? Start getting anonymous messages now! 🔥
        </h1>
        <Link
          href="/"
          target="__blank"
          className="py-2 mt-5 mx-auto rounded-md bg-primary text-sm text-primary-foreground w-[110px] text-center "
        >
          Lets Goo!
        </Link>
      </div>

      <div>
      <VenetianMask />
      </div>
    </div>
  );
};

export default SendMessages;
