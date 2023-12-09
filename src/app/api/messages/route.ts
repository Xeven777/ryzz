import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { content, userId } = body;
    console.log("body:", content, userId);
    
    if (userId) {
      const message = await prisma.message.create({
        data: {
          content,
          userId,
        },
      });

      console.log(message);
      return new NextResponse(JSON.stringify({ message }), { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
