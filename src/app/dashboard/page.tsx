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
      <div>{JSON.stringify(allMessages)}</div>
      <div>Hello !</div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <Cards message="Yo man" sentAt="today"/>
      </div>
    </>
  );
};

export default page;
