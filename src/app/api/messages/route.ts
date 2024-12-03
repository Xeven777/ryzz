import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { content, userId } = body;

    if (userId) {
      const message = await prisma.message.create({
        data: {
          content,
          userId,
        },
      });

      return new NextResponse(JSON.stringify({ message }), { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (id) {
      const message = await prisma.message.delete({ where: { id } });

      return new NextResponse(JSON.stringify({ message }), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const { id } = await req.json();

    if (id) {
      const message = await prisma.message.update({
        where: { id },
        data: { seen: true },
      });

      return new NextResponse(JSON.stringify({ message }), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const messages = await prisma.message.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(messages);
}
