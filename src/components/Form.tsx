"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

interface Props {
  userId: string;
}

const Form = ({ userId }: Props) => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    const content = message;
    event.preventDefault();
    try {
      if (!content) {
        alert("Please enter a message");
      } else {
        await fetch("/api/messages", {
          method: "POST",
          body: JSON.stringify({ content, userId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setMessage("");
        toast({
          title: "Message is send successfully 💌 and anonymously!",
          description: "Create your account to get your messages!🔥🤩",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
      <Textarea
        placeholder="Show your Ryzz 🤪"
        value={message}
        className="min-w-[220px] w-5/12 bg-zinc-200/50 text-slate-700 font-semibold"
        onChange={(e) => setMessage(e.target.value)}
      />

      {loading ? (
        <Button className="my-4" disabled>
          Sending...
        </Button>
      ) : (
        <Button type="submit" className="my-4">
          Send
        </Button>
      )}
    </form>
  );
};

export default Form;
