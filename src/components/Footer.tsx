import Image from "next/image";
import Link from "next/link";
import next from "../../public/next.svg";

const Footer = () => {
  return (
    <Link
      href="/about"
      className="md:fixed max-w-[250px] flex items-center gap-2 bottom-2 right-8 border py-1 px-3 rounded-md shadow border-purple-300 cursor-pointer mx-auto mb-4 md:mb-1 backdrop-blur"
    >
      Made with ❤️ with <Image src={next} alt="NEXT.JS" height={14} />
    </Link>
  );
};

export default Footer;
