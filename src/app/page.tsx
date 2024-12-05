import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  MessageSquare,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

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
            <Button variant="ghost">
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

          <section className="max-w-6xl mx-auto">
            <h2 className="text-center mb-8 text-6xl tracking-tighter font-semibold bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground/70 bg-clip-text text-transparent">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white h-full col-span-full lg:col-span-3">
                <div className="space-y-4">
                  <Sparkles className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Complete Anonymity</h3>
                  <p className="text-purple-100">
                    Our advanced encryption ensures your identity stays hidden.
                    Express yourself without fear.
                  </p>
                </div>
              </Card>

              <Card className="p-8 h-full bg-purple-100 dark:bg-purple-900 col-span-full lg:col-span-2">
                <div className="space-y-4">
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-bold">End-to-End Encrypted</h3>
                  <p className="text-muted-foreground">
                    Your messages are only visible to you and your recipients.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-yellow-100 dark:bg-yellow-900/50 col-span-full lg:col-span-2">
                <div className="space-y-4">
                  <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  <h3 className="text-2xl font-bold">Instant Delivery</h3>
                  <p className="text-muted-foreground">
                    Messages are delivered in real-time, anywhere in the world.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-green-100 dark:bg-green-900/50 h-full col-span-full lg:col-span-3">
                <div className="space-y-4">
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <h3 className="text-2xl font-bold">Growing Community</h3>
                  <p className="text-muted-foreground">
                    Join thousands of users sharing their thoughts freely.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <Card className="p-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                <div className="space-y-6">
                  <MessageSquare className="w-12 h-12 mx-auto text-purple-600 dark:text-purple-400" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to start messaging?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Join our community and experience true freedom of
                    expression.
                  </p>
                  <Button size="lg" className="text-lg">
                    Get Started Now
                    <ArrowRight className="ml-2" />
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
