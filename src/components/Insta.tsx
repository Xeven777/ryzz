"use client";
import { saveAs } from "file-saver";
import { useToast } from "@/components/ui/use-toast";
import img1 from "../app/assets/IMG_20231228_165809.jpg";
import img2 from "../app/assets/IMG_20231228_165855.jpg";
import img3 from "../app/assets/IMG_20231228_170121.jpg";
import { ArrowDownToLine, Copy, Instagram } from "lucide-react";
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
interface Props {
  linkprop: string;
}
const Insta = ({ linkprop }: Props) => {
  const { toast } = useToast();
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <button className="btn bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400">
            Instagram <Instagram size={18} className="ml-2" />
          </button>
        </DrawerTrigger>

        <DrawerContent className="mont">
          <DrawerHeader>
            <DrawerTitle className="font-semibold px-3 text-center">
              Steps To Share Ryzz Link to Instagram :
            </DrawerTitle>
          </DrawerHeader>
          <div className="lg:max-w-5xl mx-auto lato">
            <ul className="gap-3 flex flex-col px-5">
              <li>
                1. Download Story Template{" "}
                <button
                  type="button"
                  className="btn bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                  onClick={() => {
                    saveAs(
                      "https://i.imgur.com/jjxy4gj.jpg",
                      "Ryzz-Template.jpg"
                    );
                  }}
                >
                  <ArrowDownToLine size={16} />
                </button>
              </li>
              <li>
                2. Copy Ryzz Link here :{" "}
                <button
                  type="button"
                  className="btn bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                  onClick={() => {
                    navigator.clipboard.writeText(linkprop);
                    toast({
                      title: "Link is copied 🔗 ",
                      description: "Now let's head to your Instagram Story!",
                    });
                  }}
                >
                  <Copy size={16} />
                </button>
              </li>
              <li>
                3. Open Instagram and Select the Story Template you just
                downloaded.
              </li>
              <li className="flex">
                4.{" "}
                <Image
                  src={img1}
                  alt=""
                  width={200}
                  className="md:max-w-[350px] rounded-2xl w-[230px] h-[50px] object-cover"
                />
              </li>
              <li className="flex">
                5.{" "}
                <Image
                  src={img2}
                  alt=""
                  width={200}
                  className="md:max-w-[350px] rounded-2xl w-[250px] h-[70px] object-cover object-bottom"
                />
              </li>
              <li className="flex">
                6.{" "}
                <Image
                  src={img3}
                  alt=""
                  width={200}
                  className="md:max-w-[350px] rounded-2xl w-[240px] h-[160px] object-cover"
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

export default Insta;
