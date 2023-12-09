"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

interface Props {
  userId: string;
}


const Form = ({userId}:Props) => {


  const [message, setMessage] = useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    console.log("handleSubmit");
    const content=message;
    console.log("message", content);
    event.preventDefault();
    if (!content) {
      alert("Please enter a message");
    } else {
      await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({ content,userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("");
      console.log("message is send ", content);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea placeholder="Show your Ryzz 🤪" value={message} className=" w-[400px]" onChange={(e) => setMessage(e.target.value)} />
      <Button type="submit" className="my-4">Send</Button>
    </form>
  );
};

export default Form;
