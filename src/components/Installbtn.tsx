"use client";

import Image from "next/image";
import install from "@/../public/install.svg";
import usePwa from "use-pwa";

const InstallBtn = () => {
  const { appinstalled, canInstallprompt, isLoading, showInstallPrompt } =
    usePwa();

  if (canInstallprompt || appinstalled || isLoading) return null;

  return (
    <div>
      <button
        type="button"
        onClick={showInstallPrompt}
        className="bg-white text-lg font-semibold max-w-min text-primary hover:opacity-90 inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 active:scale-95 transition-all rounded-b-md shadow-md"
      >
        Install <Image src={install} alt="app" width={18} />
      </button>
    </div>
  );
};

export default InstallBtn;
