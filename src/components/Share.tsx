"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  userId: string;
}

const Share = ({ userId }: Props) => {
  const { toast } = useToast();

  const link = `${window.location.origin}/send/${userId}`;
  const copyLink = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast({
          title: "Link is copied 🔗 ",
          description: "Share to your Friends and Start getting Messages!🔥🤩",
        });
      })
      .catch((error) => {
        console.error("Failed to copy link to clipboard", error);
        alert("Failed to copy link to clipboard");
      });
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold my-5">Share your Link</h1>
      <div className="flex flex-row items-center gap-2 md:gap-6 flex-wrap">
        <Link
          href={`/send/${userId}`}
          className="py-1 px-4 border border-primary rounded text-purple-200 hover:text-purple-400 transition duration-300 ease-in-out max-w-2xl truncate"
        >
          {link}
        </Link>
        <Button onClick={copyLink} className="max-w  max-w-min">
          Copy Link
        </Button>
      </div>
    </>
  );
};

export default Share;
