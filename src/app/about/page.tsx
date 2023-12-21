import { Mail, Smile } from "lucide-react";
import Link from "next/link";

const page = () => {
  const devId = "user_2ZIRRRajBpJNA7AWVOftSjo84gM";
  return (
    <div className="min-h-screen flex flex-col max-w-6xl items-center py-5 px-3 mx-auto">
      <h1 className="text-5xl md:text-7xl font-semibold lato text-zinc-800">
        About{" "}
        <span className="p-2 font-bold __className_938c5f bg-clip-text text-transparent bg-gradient-to-tl from-violet-600 via-purple-700 to-fuchsia-400 logo">
          Ryzz
        </span>
      </h1>
      <div className="max-w-prose mt-4 rounded-md bg-gradient-to-br from-cyan-500 via-purple-600 to-purple-700 text-white p-4 md:p-6">
        <h2 className="text-lg ryzz font-semibold mont md:text-3xl">
          Our Promise 💫
        </h2>
        <p className="text-sm md:text-lg">
          - We don&#39;t store the IP address of anyone, so nobody can know who
          sent those messages. <br />
          - We keep the user data safe and secure.
          <br />
          - We don&#39;t sell your data to anyone.
          <br />
          - We don&#39;t use your data for any kind of advertisement.
          <br />
          - We don&#39;t send fake/bot-generated anonymous messages to you
          <br />
        </p>
      </div>
      <div className="max-w-prose mt-4 rounded-md bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-800 text-white p-4 md:p-6">
        <h2 className="text-lg ryzz font-semibold mont md:text-3xl">
          How its made ? ⚡
        </h2>
        <p className="text-sm md:text-lg">
          - The whole project is made with latest Next.JS 14 , a fullstack
          javascript framework. <br />
          - We have used Mongo DB as our database with Prisma ORM.
          <br />
          - To set up easy and fast authentication , we used Clerk Auth.
          <br />
          - We used Tailwind as CSS framework and shadcn.ui as component
          library.
          <br />- We used some lucide-react icons too{" "}
          <Smile className="inline-flex" size={17} />
          <br />
        </p>
      </div>
      <div className="sm:min-w-[65ch] mt-4 rounded-md bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-4 md:p-6">
        <h2 className="text-lg ryzz font-semibold mont md:text-3xl">
          But, who made it ? 🤨
        </h2>
        <p className="text-sm md:text-lg">
          - Well, lets just keep that a secret for now XD.
          <br />
        </p>
      </div>
      <div className="max-w-prose mt-4 rounded-md bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 text-white p-4 md:p-6">
        <h2 className="text-lg ryzz font-semibold mont md:text-3xl">
          Wanna Contact ? 📧
        </h2>
        <p className="text-sm md:text-lg">
          - For any queries, questions, recommendations , bug reports, you can
          message me (anonymously🤫) here :
          <br />
          <Link
            href={`/send/${devId}`}
            target="__blank"
            className="p-1 m-3 bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          >
            <Mail size={17} color="black" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
