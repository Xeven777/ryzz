import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 ">
      <h1 className="className__myfont_fc33664f__b6a01139 ryzz text-white text-6xl md:text-8xl text-center font-extrabold mx-auto my-10">
        Ryzz
      </h1>
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
        <Link href="/dashboard">Start Now</Link>
      </button>
    </main>
  );
}
