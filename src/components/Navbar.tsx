"use client";
import Link from "next/link";
import next from "@/../public/next.svg";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <div className="p-0 shadow border-b-2 justify-center items-center sticky top-0 z-10 min-w-full bg-inherit">
        <div className="max-w-7xl m-auto flex flex-wrap gap-4 justify-between lg:px-8 p-4 ">
          <div className="flex flex-row gap-8 items-center ">
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2"
            >
              <Image src={next} height={20} alt="NGL" className="invert"/>
              <h1 className="text-3xl font-bold text">NGL</h1>
            </Link>
          </div>

          <div className="flex items-center md:gap-4 gap-2 ">
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
