"use client";

import { motion } from "framer-motion";
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
import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 dark:from-purple-950 to-background">
      <header className="sticky top-0 w-full z-50 bg-background/60 backdrop-blur-lg">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl __className_938c5f font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Ryzz
          </motion.div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">About</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      <main className="pb-16 md:px-4">
        <div className="mx-auto space-y-24">
          {/* Hero Section */}
          <section className="text-center flex items-center justify-center flex-col bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 rounded-3xl min-h-[800px] relative overflow-hidden">
            <div className="h-28 bg-slate-200/20 w-full absolute top-0">
              <VelocityScroll
                text="Share your thoughts anonymously"
                default_velocity={5}
                className="text-center text-4xl font-bold tracking-tight text-white md:text-7xl leading-relaxed"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-purple-100 w-fit text-purple-700 dark:bg-purple-900 dark:text-purple-100 px-4 py-1 rounded-full">
                🚀 Join 10k+ early users
              </div>
              <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tight">
                Share your thoughts
                <span className="block text-purple-600 dark:text-purple-400">
                  anonymously
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Express yourself freely. Connect authentically. Stay anonymous.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="text-lg">
                Start Messaging
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </motion.div>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-full lg:col-span-2"
            >
              <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white h-full">
                <div className="space-y-4">
                  <Sparkles className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Complete Anonymity</h3>
                  <p className="text-purple-100">
                    Our advanced encryption ensures your identity stays hidden.
                    Express yourself without fear.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 h-full bg-purple-100 dark:bg-purple-900">
                <div className="space-y-4">
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-bold">End-to-End Encrypted</h3>
                  <p className="text-muted-foreground">
                    Your messages are only visible to you and your recipients.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-8 bg-yellow-100 dark:bg-yellow-900/50">
                <div className="space-y-4">
                  <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  <h3 className="text-2xl font-bold">Instant Delivery</h3>
                  <p className="text-muted-foreground">
                    Messages are delivered in real-time, anywhere in the world.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-8 bg-green-100 dark:bg-green-900/50">
                <div className="space-y-4">
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <h3 className="text-2xl font-bold">Growing Community</h3>
                  <p className="text-muted-foreground">
                    Join thousands of users sharing their thoughts freely.
                  </p>
                </div>
              </Card>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Trusted by thousands
              </h2>
              <p className="text-xl text-muted-foreground">
                Join our growing community of anonymous messengers
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  10k+
                </h3>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  1M+
                </h3>
                <p className="text-sm text-muted-foreground">Messages Sent</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  100%
                </h3>
                <p className="text-sm text-muted-foreground">Anonymous</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  24/7
                </h3>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-8"
            >
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
            </motion.div>
          </section>
        </div>
      </main>

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2024 whispr. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
