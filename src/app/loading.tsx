import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-fuchsia-100 flex flex-col items-center justify-center">
      <h1 className="md:text-8xl text-5xl font-bold logo bg-clip-text text-transparent bg-gradient-to-tl from-violet-600 via-purple-700 to-fuchsia-400 p-6">
        Ryzz
      </h1>
      <h2 className="text-slate-800 text-lg p-2">Loading...</h2>
      <Loader2 className="text-purple-700 animate-spin" size={50} />
    </div>
  );
};

export default Loading;
