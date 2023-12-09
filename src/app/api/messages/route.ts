import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { content ,userId} = body;
    console.log("body :", content, userId);
    if (userId) {
      const message = await prisma.message.create({
        data: {
          content,
          userId,
        },
      });

      console.log(message);
      return Response.json({ message }, { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return { status: 500, body: { error: "Internal server error" } };
  }
}
