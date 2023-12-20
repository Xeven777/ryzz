import { auth } from "@clerk/nextjs";
import prisma from "../../lib/db/prisma";
import Share from "@/components/Share";
import Cards from "@/components/Cards";
import Refresh from "@/components/Refresh";

const page = async () => {
  const { userId } = auth();

  if (userId === null) {
    return;
  }

  const allMessages = await prisma.message.findMany({ where: { userId } });

  return (
    <>
      <Share userId={userId} />
      <h1 className="md:text-5xl text-3xl mt-8 mb-1 tracking-tighter font-bold mont">
        <span className="bg-gradient-to-br from-zinc-600 to-zinc-950 text-transparent bg-clip-text">
          Your{" "}
        </span>
        <span className="tracking-normal bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 text-transparent bg-clip-text">
          INBOX
        </span>{" "}
        ! 💌
      </h1>

      <p className="font-semibold text-lg text-muted-foreground px-1 mont">
        Ryzz meter : {allMessages.length} 🔥
      </p>

      <Refresh />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 max-w-6xl py-3">
        {allMessages.map((message) => (
          <Cards
            key={message.id}
            messageId={message.id}
            message={message.content}
            sentAt={message.createdAt.toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
            })}
          />
        ))}
        {allMessages.length === 0 && (
          <div className="text-center col-span-full p-2 mt-16 md:text-lg text-muted-foreground">
            No Messages found. Share Link above and start getting messages!!
          </div>
        )}
      </div>
    </>
  );
};

export default page;
