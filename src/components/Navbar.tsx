"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <div className="p-0 shadow border-b-2 justify-center items-center sticky top-0 z-10 min-w-full bg-inherit">
        <div className="max-w-6xl m-auto flex flex-wrap justify-between px-4 lg:px-2 py-3">
          <div>
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2"
            >
              <h1 className="text-4xl font-bold className__myfont_fc33664f__b6a01139 bg-clip-text text-transparent bg-gradient-to-tl from-violet-600 via-purple-700 to-fuchsia-400">
                Ryzz
              </h1>
            </Link>
          </div>

          <div>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
