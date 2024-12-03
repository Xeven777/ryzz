import { Twitter } from "lucide-react";

interface Props {
  linkprop: string;
}

const Twit = ({ linkprop }: Props) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=Hey!%20Send%20me%20anonymous%20messages%20in%20Ryzz%20.%20I%20will%20never%20know%20who%20had%20send%20it%20XD%20%20&url=${linkprop}`}
      target="_blank"
      className="flex gap-2 text-sm h-10 items-center hover:bg-blue-400 active:scale-95 active:bg-blue-400 transition-all bg-blue-500 text-white px-3 rounded-md"
    >
      Twitter <Twitter size={18} />
    </a>
  );
};

export default Twit;
