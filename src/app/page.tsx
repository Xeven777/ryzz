import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl md:text-6xl text-center font-extrabold mx-auto my-10">Ryzz</h1>
      <Button asChild>
        <Link href="/dashboard">Start Now</Link>
      </Button>
    </main>
  );
}
