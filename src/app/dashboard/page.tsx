import { auth } from "@clerk/nextjs";
import prisma from "../../lib/db/prisma";
import Share from "@/components/Share";
import Cards from "@/components/Cards";

const page = async () => {
  const { userId } = auth();

  if (userId === null) {
    return;
  }

  const allMessages = await prisma.message.findMany({ where: { userId } });

  return (
    <>
      <Share userId={userId} />
      <h1 className="md:text-5xl text-3xl mt-7 mb-3">Your Inbox !💌</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
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
          <div className="text-center col-span-full">
            No Messages found. Share Link above and start getting messages!!
          </div>
        )}
      </div>
    </>
  );
};

export default page;
