import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function LayoutNotes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-6xl m-auto mb-14">{children}</main>
      <Toaster />
    </>
  );
}
