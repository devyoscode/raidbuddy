import React from "react";

const DashboardView = () => {
  return (
    <div className="h-[90%] w-full bg-white/50 flex flex-col px-3 pb-3">
      <div className="h-[5%] w-full flex gap-3 items-center">
        <Circle />
        <Circle />
        <Circle />
      </div>
      <div className="h-[95%] w-full bg-slate-50"></div>
    </div>
  );
};

const Circle = () => {
  return <span className="flex h-3 w-3 bg-slate-900/10 rounded-full"></span>;
};

export default DashboardView;
