"use client";
import { saveAs } from "file-saver";
import img1 from "../app/assets/IMG_20231228_185636.jpg";
import img2 from "../app/assets/IMG_20231228_185741.jpg";
import { ArrowDownToLine, Copy, Ghost } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { toast } from "sonner";
interface Props {
  linkprop: string;
}
const Snap = ({ linkprop }: Props) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <button className="max-w-min hover:opacity-90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 font-medium active:scale-95 transition-all bg-yellow-400 text-zinc-800">
            Snapchat <Ghost size={18} className="ml-2" />
          </button>
        </DrawerTrigger>

        <DrawerContent className="mont">
          <DrawerHeader>
            <DrawerTitle className="font-semibold px-3 text-center">
              Steps To Share Ryzz Link to Snapchat :
            </DrawerTitle>
          </DrawerHeader>
          <div className="lg:max-w-5xl mx-auto lato">
            <ul className="gap-3 flex flex-col px-5">
              <li>
                1. Download Story Template{" "}
                <button
                  type="button"
                  className="btn bg-yellow-400"
                  onClick={() => {
                    saveAs(
                      "https://i.imgur.com/jjxy4gj.jpg",
                      "Ryzz-Template.jpg"
                    );
                  }}
                >
                  <ArrowDownToLine size={16} color="#27272a" />
                </button>
              </li>
              <li>
                2. Copy Ryzz Link here :{" "}
                <button
                  type="button"
                  className="btn bg-yellow-400"
                  onClick={() => {
                    navigator.clipboard.writeText(linkprop);
                    toast.success( "Link is copied 🔗 ",{                      
                      description: "Now let's head to your Snapchat Story!",
                    });
                  }}
                >
                  <Copy size={16} color="#27272a" />
                </button>
              </li>
              <li>
                3. Open Snapchat and Select the Story Template you just
                downloaded.
              </li>
              <li className="flex">
                4.{" "}
                <Image
                  src={img1}
                  alt=""
                  width={200}
                  className="md:max-w-[350px] rounded-2xl w-[240px] h-[60px] object-cover"
                />
              </li>
              <li className="flex">
                5.{" "}
                <Image
                  src={img2}
                  alt=""
                  width={200}
                  className="md:max-w-[350px] rounded-2xl w-[240px] h-[60px] object-cover"
                />
              </li>
            </ul>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <button className="btn bg-primary text-primary-foreground">
                Got It
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Snap;
