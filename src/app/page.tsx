import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import hero from "./assets/Social media-cuate.svg";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-20 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 ">
      <h1 className="__className_938c5f p-2 logo ryzz text-white text-6xl md:text-8xl text-center font-extrabold mx-auto mb-5">
        Ryzz
      </h1>
      <p className="text-center text-zinc-200 font-medium mont px-3 md:text-xl">
        Create an account and Start the fun! 🔥😍
      </p>
      <Image src={hero} alt="hero" height={300} />
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 active:scale-95 animate-shake">
        <Link href="/dashboard">Start Now ⚡</Link>
      </button>
    </main>
  );
}
