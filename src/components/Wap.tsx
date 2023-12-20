import { Share2Icon } from "lucide-react";

interface Props {
    linkprop: string;
}

const Wap = ({linkprop}:Props) => {
  return (
    <a
      href={`https://wa.me/?text=Hey!%20I%20am%20using%20Ryzz%20to%20send%20messages%20anonymously.%20Join%20me%20here%20https://${linkprop}`}
      target="_blank"
      className="flex gap-2 text-sm h-10 items-center hover:bg-green-500 active:bg-green-500 transition-all bg-green-600 text-white px-3 rounded-md"
    >
      Whatsapp <Share2Icon size={18} />
    </a>
  );
};

export default Wap;