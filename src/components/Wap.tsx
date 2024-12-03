import { Share2Icon } from "lucide-react";

interface Props {
  linkprop: string;
}

const Wap = ({ linkprop }: Props) => {
  return (
    <a
      href={`https://wa.me/?text=Hey!%20Send%20me%20anonymous%20messages%20in%20Ryzz%20.%20I%20will%20never%20know%20who%20had%20send%20it%20XD%20%20${linkprop}`}
      target="_blank"
      className="flex gap-2 text-sm h-10 items-center hover:bg-green-500 active:scale-95 active:bg-green-500 transition-all bg-green-600 text-white px-3 rounded-md"
    >
      Whatsapp <Share2Icon size={18} />
    </a>
  );
};

export default Wap;
