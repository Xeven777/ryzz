import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 ">
      <h1 className="logo ryzz text-white text-3xl md:text-6xl text-center font-extrabold mx-auto my-10">
        Ryzz
      </h1>
      <Button asChild>
        <Link href="/dashboard">Start Now</Link>
      </Button>
    </main>
  );
}
