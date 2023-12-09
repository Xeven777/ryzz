import Form from "@/components/Form";
import Link from "next/link";
import React from "react";

type Props = {
  params: { id: string };
};

const SendMessages = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 gap-3">
      <h2 className="text-2xl md:text-5xl font-bold">Ryzz</h2>
      <p className="text-purple-200/70">Send Anonymous messages here </p>
      <Form userId={id} />

      <div className="flex flex-col mt-20 text-center">
        <h1>What are You waiting for? Start getting anonymous messages!</h1>
        <Link
          href="/"
          target="__blank"
          className="py-2 mt-5 mx-auto rounded bg-primary text-sm text-primary-foreground w-[110px] text-center"
        >
          Lets Goo!
        </Link>
      </div>
    </div>
  );
};

export default SendMessages;
