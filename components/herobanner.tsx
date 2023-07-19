import React from "react";
import Herosquare from "@/components/herosquare";
import DashboardView from "@/components/dashboardView";

const Herobanner = () => {
  return (
    <div className="flex h-fit w-full gap-8">
      <div className="w-1/2 h-fit flex flex-col gap-10">
        <Herosquare title="History">
          Dive into the records, relive epic moments, and analyze strategies to
          improve your future raids.
        </Herosquare>
        <Herosquare title="Analytics">
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Herosquare>
      </div>
      <div className="w-1/2 flex h-[680px] bg-gradient-to-b from-rose-500/20 via-rose-500/25 to-rose-500/20 shadow-inner shadow-xs items-center pl-10">
        <DashboardView />
      </div>
    </div>
  );
};

export default Herobanner;
