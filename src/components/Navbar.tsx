"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="p-0 shadow border-b-2 justify-center items-center sticky top-0 z-10 min-w-full bg-background/50 backdrop-blur-xl rounded-b-3xl">
      <div className="max-w-6xl m-auto items-center flex flex-wrap justify-between px-4 lg:px-2 py-2">
        <div>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2"
          >
            <h1 className="text-4xl p-2 font-bold  bg-clip-text text-transparent bg-gradient-to-tl from-violet-600 via-purple-700 to-fuchsia-400 logo">
              Ryzz
            </h1>
          </Link>
        </div>

        <div className="flex md:gap-4 items-center">
          <ThemeToggle />
          <UserButton
            appearance={{
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
        </div>
      </div>
    </div>
  );
}
