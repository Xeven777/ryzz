"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
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
        className="min-w-[220px] mx-2 w-full sm:w-5/12 bg-zinc-200/50 text-slate-700 font-semibold text-base"
        onChange={(e) => setMessage(e.target.value)}
      />

      {loading ? (
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 my-4"
          disabled
        >
          Sending...
        </button>
      ) : (
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 my-4"
        >
          Send
        </button>
      )}
    </form>
  );
};

export default Form;
