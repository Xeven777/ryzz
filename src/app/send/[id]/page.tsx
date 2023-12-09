import Form from "@/components/Form";
import React from "react";

type Props = {
  params: { id: string };
};

const SendMessages = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-24 gap-3">
      <h2 className="text-2xl md:text-5xl">Ryzz</h2>
      <p className="text-purple-200/70">Send Anonymous messages here </p>
      <Form userId={id} />
    </div>
  );
};

export default SendMessages;
