"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Copy } from "lucide-react";

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
      <h1 className="text-xl md:text-3xl font-bold mt-5 mb-3">
        Share your Link
      </h1>
      <div className="flex flex-row items-center gap-2 md:gap-6 flex-wrap">
        <Link
          href={`/send/${userId}`}
          className="py-1 px-4 border border-primary rounded text-purple-900 hover:text-purple-600 transition duration-300 ease-in-out max-w-2xl truncate"
        >
          {link}
        </Link>
        <button
          onClick={copyLink}
          className="max-w max-w-min bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 font-medium"
        >
          Copy Link <Copy size={16} className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default Share;
