"use client";

import React from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import Wap from "./Wap";
import Insta from "./Insta";
import Snap from "./Snap";
import Twit from "./Twit";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Share = ({ userId }: { userId: string }) => {
  const link = `${window.location.origin}/send/${userId}`;
  const copyLink = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast.success("Link is copied 🔗 ", {
          description: "Share to your Friends and Start getting Messages!🔥🤩",
        });
      })
      .catch((error) => {
        console.error("Failed to copy link to clipboard", error);
        toast.error("Failed to copy link to clipboard");
      });
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold mt-3 md:mt-5 mb-3 tracking-tight mont">
        Share your Link
      </h1>
      <div className="flex flex-row items-center gap-2 flex-wrap">
        <Link
          href={`/send/${userId}`}
          className="py-1 px-3 border border-primary/80 rounded-md transition-all duration-300 max-w-2xl truncate text-primary dark:text-purple-500"
        >
          {link}
        </Link>
        <Button onClick={copyLink}>
          Copy Link <Copy size={16} className="ml-2" />
        </Button>
        <Wap linkprop={link} />
        <Insta linkprop={link} />
        <Snap linkprop={link} />
        <Twit linkprop={link} />
      </div>
    </>
  );
};

export default Share;
