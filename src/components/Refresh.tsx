"use client";
import { RefreshCcw } from "lucide-react";

const Refresh = () => {
  return (
    <div className="flex text-sm text-muted-foreground items-center gap-2 ">
      Check for new messages ;)
      <button
        type="button"
        title="Refresh"
        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium p-2 my-2 gap-2"
        onClick={() => {
          window.location.reload();
        }}
      >
        <RefreshCcw size={16} />
      </button>
    </div>
  );
};

export default Refresh;
