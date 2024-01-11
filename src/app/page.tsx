import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import hero from "./assets/Social media-cuate.svg";
import { redirect } from "next/navigation";
import Image from "next/image";
import InstallBtn from "@/components/Installbtn";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-20 md:py-16 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 ">
      <div className="fixed top-0 md:right-40">
        <InstallBtn />
      </div>

      <h1 className="__className_938c5f p-2 logo ryzz text-white text-6xl md:text-8xl text-center font-extrabold mx-auto mb-5">
        Ryzz
      </h1>
      <p className="text-center text-zinc-200 font-medium mont px-3 md:text-xl">
        Create an account and Start the fun! 🔥😍
      </p>
      <Image src={hero} alt="hero" height={300} />
      <button className="bg-primary btn animate-shake">
        <Link href="/dashboard">Start Now ⚡</Link>
      </button>
    </main>
  );
}
