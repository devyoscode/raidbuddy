import React from "react";

const RecentRaids = () => {
  return (
    <div className="w-2/3 flex flex-col my-5 pr-5 min-h-[500px] gap-4 flex-shrink-0">
      <h2 className="text-4xl font-medium">Recent Raids</h2>
      <div className="w-full h-14 border-b-2 border-t-2 border-slate-900/10 flex items-center justify-between text-sm font-medium text-slate-900/50 pr-2 flex-shrink-0">
        <span className="">ID</span>
        <span className="w-[30%]">Title</span>
        <span className="">Date Created</span>
        <span className="">Participants</span>
        <span className="">Status</span>
      </div>

      <div className="w-full h-full flex items-center justify-center text-gray-500/50">
        Nothing yet...
      </div>
    </div>
  );
};

export default RecentRaids;
