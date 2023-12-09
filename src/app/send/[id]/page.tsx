import Form from "@/components/Form";
import React from "react";

type Props = {
  params: { id: string };
};

const SendMessages = ({ params: { id } }: Props) => {

  return (
    <div className="flex items-center justify-center p-24">
      <Form userId={id}/>
    </div>
  );
};

export default SendMessages;
