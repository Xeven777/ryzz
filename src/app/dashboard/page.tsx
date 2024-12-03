import { auth } from "@clerk/nextjs/server";
import prisma from "../../lib/db/prisma";
import Share from "@/components/Share";
import Cards from "@/components/Cards";
import Refresh from "@/components/Refresh";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const revalidate = 100;

const page = async () => {
  const { userId } = await auth();

  if (userId === null) {
    return;
  }

  const allMessages = await prisma.message.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Suspense fallback={<Skeleton className="w-52 my-2 h-8" />}>
        <Share userId={userId} />
      </Suspense>
      <h1 className="md:text-5xl text-3xl mt-8 mb-1 tracking-tighter font-bold mont">
        <span className="bg-gradient-to-tl from-foreground/65 to-foreground text-transparent bg-clip-text">
          Your{" "}
        </span>
        <span className="tracking-normal bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text">
          INBOX
        </span>{" "}
        ! 💌
      </h1>
      <Suspense fallback={<Skeleton className="w-52 my-2 h-8" />}>
        <p className="font-semibold text-lg text-muted-foreground px-1 mont">
          Ryzz-o-Meter : {allMessages.length}{" "}
          <span className="animate-pulse">🔥</span>
        </p>
      </Suspense>

      <Refresh />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 max-w-6xl py-3">
        <Suspense fallback={<Skeleton className="rounded-lg" />}>
          {allMessages.map((message) => (
            <Cards
              key={message.id}
              messageId={message.id}
              seen={message.seen}
              message={message.content}
              sentAt={message.createdAt.toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
              })}
            />
          ))}
        </Suspense>
        {allMessages.length === 0 && (
          <div className="text-center col-span-full p-2 mt-16 md:text-lg text-muted-foreground lato">
            No Messages found. Share Link above and start getting messages!!
          </div>
        )}
      </div>
    </>
  );
};

export default page;
