"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2, TrashIcon } from "lucide-react";
import { useState } from "react";
import Message from "./Message";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Button } from "./ui/button";

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
      toast.success("Message deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleSeen() {
    try {
      setIsSeen(true);
      await fetch("api/messages", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: messageId }),
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  if (deleted) {
    return null;
  }
  return isSeen ? (
    <Dialog>
      <Card className="border-primary/30 dark:border-accent/20 cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300 pb-0">
        <DialogTrigger asChild>
          <CardContent>
            <p className="pt-5 line-clamp-1">{message}</p>
          </CardContent>
        </DialogTrigger>
        <Separator />
        <CardFooter className="flex justify-between py-1">
          <CardDescription>{sentAt}</CardDescription>
          <Button
            title="delete"
            onClick={handleDelete}
            variant={"ghost"}
            size={"icon"}
            disabled={loading}
          >
            {!loading ? (
              <TrashIcon size={20} color="red" />
            ) : (
              <Loader2 size={20} className="animate-spin ease-in-out" />
            )}
          </Button>
        </CardFooter>
      </Card>

      <DialogContent className="px-2 md:p-6">
        <DialogTitle className="sr-only">Message</DialogTitle>
        <Message message={message} />
      </DialogContent>
    </Dialog>
  ) : (
    <Card
      className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[130px] bg-gradient-to-tl from-cyan-300 via-blue-500 to-purple-600 flex flex-col items-center justify-center cursor-pointer"
      onClick={handleSeen}
    >
      <h2 className="logo p-1 md:text-5xl text-4xl text-white  ryzz ">Ryzz</h2>
      <p className="text-zinc-100/70">Click to reveal</p>
    </Card>
  );
};

export default Cards;
