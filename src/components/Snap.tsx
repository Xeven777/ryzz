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
import { Button } from "./ui/button";
interface Props {
  linkprop: string;
}
const Snap = ({ linkprop }: Props) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-yellow-400 text-zinc-800 hover:bg-yellow-500">
            Snapchat <Ghost size={18} className="ml-2" />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="mont">
          <DrawerHeader>
            <DrawerTitle className="font-semibold px-3 text-center">
              Steps To Share Ryzz Link to Snapchat :
            </DrawerTitle>
          </DrawerHeader>
          <div className="lg:max-w-5xl mx-auto ">
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
                    toast.success("Link is copied 🔗 ", {
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
                  placeholder="blur"
                  fetchPriority="low"
                  width={200}
                  className="md:max-w-[350px] rounded-2xl w-[240px] h-[60px] object-cover"
                />
              </li>
              <li className="flex">
                5.{" "}
                <Image
                  src={img2}
                  alt=""
                  placeholder="blur"
                  fetchPriority="low"
                  width={200}
                  className="md:max-w-[350px] rounded-2xl w-[240px] h-[60px] object-cover"
                />
              </li>
            </ul>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="w-fit mx-auto">Got It</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Snap;
