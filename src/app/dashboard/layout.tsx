import dynamic from "next/dynamic";
const InstallBtn = dynamic(() => import("@/components/Installbtn"), {
  loading: () => <p>Install Now!🔥</p>,
});
import Navbar from "@/components/Navbar";

export default function LayoutNotes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <InstallBtn />
      </div>
      <main className="p-4 max-w-6xl m-auto mb-14">{children}</main>
    </>
  );
}
