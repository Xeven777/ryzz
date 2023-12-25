"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Loader2, TrashIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  message: string;
  messageId: string;
  sentAt: string;
  seen: boolean;
}

const Cards = ({ message, sentAt, messageId, seen }: Props) => {
  const [loading, setLoading] = useState(false);
  const [isSeen, setIsSeen] = useState(seen);
  const [deleted, setDeleted] = useState(false);
  async function handleDelete() {
    setLoading(true);
    try {
      await fetch("api/messages", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: messageId }),
      });
      setDeleted(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleSeen() {
    try {
      await fetch("api/messages", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: messageId }),
      });
      setIsSeen(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }
  if (deleted) {
    return null;
  }
  return isSeen ? (
    <Card className="border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ">
      <CardContent>
        <p className="pt-4 line-clamp-1">{message}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>{sentAt}</CardDescription>
        {loading ? (
          <button
            title="delete"
            type="button"
            onClick={handleDelete}
            disabled
            className="bg-fuchsia-600 text-white rounded-full p-1"
          >
            <Loader2 className="animate-spin cursor-wait" size={20} />
          </button>
        ) : (
          <button
            title="delete"
            type="button"
            onClick={handleDelete}
            className="bg-zinc-100 rounded-full p-1"
          >
            <TrashIcon className="cursor-pointer" size={20} color="red" />
          </button>
        )}
      </CardFooter>
    </Card>
  ) : (
    <Card
      className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[140px] bg-gradient-to-tl from-cyan-300 via-blue-500 to-purple-600 flex flex-col items-center justify-center cursor-pointer"
      onClick={handleSeen}
    >
      <h2 className="logo p-1 md:text-5xl text-4xl text-white  ryzz __className_938c5f">
        Ryzz
      </h2>
      <p className="text-zinc-300">Click to reveal</p>
    </Card>
  );
};

export default Cards;
