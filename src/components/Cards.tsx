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
}

const Cards = ({ message, sentAt, messageId }: Props) => {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  async function handleDelete() {
    setLoading(true);
    try {
      const response = await fetch("api/messages", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: messageId }),
      });
      console.log(response);
      setDeleted(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  if (deleted) {
    return null;
  }
  return (
    <Card className="border-primary/30 hover:-translate-y-1 transition-all duration-300 ">
      <CardContent>
        <p className="pt-3">{message}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>{sentAt}</CardDescription>

        {loading ? (
          <button
            title="delete"
            type="button"
            onClick={handleDelete}
            disabled
            className="bg-blue-500 rounded-full p-1"
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
  );
};

export default Cards;
