import React from "react";
import { iComponent } from "@/types/types";
import { AnalyticsIcon, HistoryIcon } from "@/components/icons";

const Herosquare = ({ title, children }: iComponent) => {
  return (
    <div
      className={`h-80 w-full flex items-center bg-gradient-to-b ${
        title === "History"
          ? "from-cyan-500/20 via-cyan-500/30 to-cyan-500/20"
          : "from-yellow-500/20 via-yellow-500/25 to-yellow-500/20"
      }`}
    >
      <div className="flex flex-col w-2/3 px-10 gap-3">
        <h4 className="text-4xl font-semibold">{title}</h4>
        <p className="font-light text-xl">{children}</p>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        {title === "History" ? <HistoryIcon /> : <AnalyticsIcon />}
      </div>
    </div>
  );
};

export default Herosquare;
