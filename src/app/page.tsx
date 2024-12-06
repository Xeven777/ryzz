import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import emojis from "@/app/assets/emojis.png";
import img2 from "@/app/assets/3dcartn.png";
import cloud from "@/app/assets/cloud.png";
import rocket from "@/app/assets/rocket.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 dark:from-purple-950 to-background">
      <header className="sticky top-0 w-full z-50 bg-background/60 backdrop-blur-lg rounded-b-3xl">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-3xl px-1 logo font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
            Ryzz
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="accent"
              className="bg-transparent hover:text-accent-foreground text-foreground"
            >
              <Link href={"/about"}>About</Link>
            </Button>
            <Button asChild>
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="pb-16 md:px-4">
        <div className="mx-auto space-y-40">
          <HeroSection />

          <section className="max-w-6xl mx-auto px-2">
            <h2 className="text-center mb-8 text-6xl tracking-tighter font-semibold bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground/70 bg-clip-text text-transparent">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <Card className="col-span-full group flex items-end lg:col-span-3 h-64 relative bg-gradient-to-br from-yellow-500 to-amber-200 overflow-hidden md:overflow-auto">
                <Image
                  src={img2}
                  alt="Feature 1"
                  width={500}
                  height={500}
                  className="absolute group-hover:-translate-x-12 duration-500 object-cover object-top -translate-x-40 bottom-0 md:-translate-x-20"
                />
                <div className="space-y-4 mt-auto text-end ml-auto p-8">
                  <h3 className="text-2xl md:text-3xl tracking-tighter font-bold text-yellow-900">
                    Complete Anonymity
                  </h3>
                  <p className="max-w-xs leading-snug text-black">
                    Get totally anonymous messages from your friends and family
                  </p>
                </div>
              </Card>

              <Card className="flex h-56 items-end group md:h-full bg-gradient-to-br from-cyan-400 to-blue-200 col-span-full lg:col-span-2 relative">
                <Image
                  src={cloud}
                  alt="cloud"
                  width={200}
                  height={200}
                  className="absolute size-40 md:size-48 -top-6 z-0 group-hover:scale-105 group-hover:-top-12 duration-500"
                />
                <div className="space-y-4 mt-auto text-end ml-auto p-8">
                  <h3 className="text-2xl md:text-3xl tracking-tighter text-blue-900 font-bold">
                    Saved on the Cloud
                  </h3>
                  <p className="pl-10 max-w-sw leading-snug text-black">
                    Access your messages from anywhere in the world.
                  </p>
                </div>
              </Card>

              <Card className="flex group items-end h-60 bg-gradient-to-br from-rose-400 to-red-200 col-span-full lg:col-span-2 relative">
                <Image
                  src={rocket}
                  alt="rocket"
                  width={200}
                  height={200}
                  className="absolute size-56 -top-10 -left-4 z-0 group-hover:scale-125
                   transition-all duration-500"
                />
                <div className="space-y-4 mt-auto text-end ml-auto px-8 py-6">
                  <h3 className="text-2xl md:text-3xl tracking-tighter text-rose-900 font-bold">
                    Build for Scalability
                  </h3>
                  <p className="max-w-xs leading-snug text-black">
                    Built using the latest technologies for scalability.
                  </p>
                </div>
              </Card>

              <Card className="flex group items-end h-60 bg-gradient-to-br from-accent to-lime-200 col-span-full lg:col-span-3 relative">
                <Image
                  src={emojis}
                  alt="emoji"
                  width={200}
                  height={200}
                  className="absolute size-40 md:size-60 -top-6 md:-top-10 left-2 md:left-8 z-0 group-hover:scale-110 group-hover:rotate-3 duration-500"
                />
                <div className="space-y-4 mt-auto text-end ml-auto px-8 py-6">
                  <h3 className="text-2xl md:text-3xl tracking-tighter text-lime-900 font-bold">
                    Share on Social Media
                  </h3>
                  <p className="max-w-xs leading-snug text-black">
                    You can share the link and messages on every social media🤩
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center px-2">
            <div className="max-w-3xl mx-auto space-y-8">
              <Card className="md:p-12 py-10 px-6 bg-gradient-to-br from-accent to-accent/70 rounded-3xl box-glow">
                <div className="space-y-6">
                  <MessageSquare className="size-12 mx-auto text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                    Ready to start messaging?
                  </h2>
                  <p className="text-lg text-black/80 max-w-md mx-auto">
                    Join Ryzz today and start getting anonymous messages from
                    your friends and family.
                  </p>
                  <Button
                    size="lg"
                    variant={"outline"}
                    className="text-lg bg-accent-foreground text-accent"
                    asChild
                  >
                    <Link href={"/dashboard"}>
                      Let&apos;s Go!
                      <ArrowRight className="ml-2" size={30} />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2024 Ryzz. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
