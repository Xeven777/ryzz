import { auth } from "@clerk/nextjs";
import prisma from "../../lib/db/prisma";
import Share from "@/components/Share";

const page = async () => {
  const { userId } = auth();

  if (userId === null) {
    return;
  }

  const allMessages = await prisma.message.findMany({ where: { userId } });

  return (
    <>
      <div>{JSON.stringify(allMessages)}</div>
      <div>hello , user id : {userId}</div>

      <Share userId={userId} />
    </>
  );
};

export default page;
