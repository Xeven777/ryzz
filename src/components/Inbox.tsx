"use client";

import Cards from "@/components/Cards";
import Refresh from "@/components/Refresh";
import { useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Inbox = () => {
  const { userId } = useAuth();
  const {
    data: messages,
    error,
    isLoading,
  } = useSWR(userId ? `/api/messages` : null, fetcher, {
    refreshInterval: 30000,
  });

  if (!userId) return null;
  if (error) return <div className="text-xl p-2">Failed to load</div>;
  if (isLoading)
    return (
      <div className="min-h-32 w-full flex items-center justify-center gap-4 text-4xl">
        Loading... <Loader size={42} className="animate-spin ease-in-out" />
      </div>
    );
  return (
    <>
      <p className="font-semibold text-lg text-muted-foreground px-1 mont">
        Ryzz-o-Meter : {messages.length}{" "}
        <span className="animate-pulse">🔥</span>
      </p>

      <Refresh />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 max-w-6xl py-3">
        {messages.map((message: any) => (
          <Cards
            key={message.id}
            messageId={message.id}
            seen={message.seen}
            message={message.content}
            sentAt={new Date(message.createdAt).toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
            })}
          />
        ))}
        {messages.length === 0 && (
          <div className="text-center col-span-full p-2 mt-16 md:text-lg text-muted-foreground ">
            No Messages found. Share Link above and start getting messages!!
          </div>
        )}
      </div>
    </>
  );
};

export default Inbox;
