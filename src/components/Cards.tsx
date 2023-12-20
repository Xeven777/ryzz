"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import prisma from "@/lib/db/prisma";
import { TrashIcon } from "lucide-react";

interface Props {
  message: string;
  messageId: string;
  sentAt: string;
}

const Cards = ({ message, sentAt, messageId }: Props) => {
  async function handleDelete() {
   
  }

  return (
    <Card className="border-primary/30 hover:-translate-y-1 transition-all duration-300 ">
      <CardContent>
        <p className="pt-3">{message}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>{sentAt}</CardDescription>
        <button title="delete" type="button" onClick={handleDelete()} className="bg-zinc-100 rounded-full p-1">
          <TrashIcon className="cursor-pointer" size={20} color="red" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
