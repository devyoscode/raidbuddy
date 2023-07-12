import React from "react";

const Attendance = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-4xl font-medium flex flex-shrink-0">Attendance</h2>
      <div className="flex h-[420px] w-full flex-col gap-3">
        <div className="h-full w-full flex border-2">s</div>
        <div className="h-14 flex-shrink-0 w-full flex border-2 items-center justify-between text-center font-semibold text-slate-900/50">
          <div className="w-1/12">Jan</div>
          <div className="w-1/12">Feb</div>
          <div className="w-1/12">Mar</div>
          <div className="w-1/12">Apr</div>
          <div className="w-1/12">May</div>
          <div className="w-1/12">Jun</div>
          <div className="w-1/12">Jul</div>
          <div className="w-1/12">Aug</div>
          <div className="w-1/12">Sep</div>
          <div className="w-1/12">Oct</div>
          <div className="w-1/12">Nov</div>
          <div className="w-1/12">Dec</div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
