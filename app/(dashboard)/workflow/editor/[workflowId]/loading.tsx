import { Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader2Icon size={30} className="animate-spin stroke-primary" />
    </div>
  );
};

export default Loading;
