import Navbar from "@/components/Navbar";

export default function LayoutNotes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-7xl m-auto mb-14">{children}</main>
    </>
  );
}
