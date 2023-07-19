import React from "react";
import { iComponent } from "@/types/types";

const PopUpCreationForm = ({
  children,
  setBooleanState,
  title,
  text,
}: iComponent) => {
  if (!setBooleanState) return;
  return (
    <div className="absolute min-h-screen w-full min-w-screen h-full bg-slate-900/10 transition duration-75 backdrop-blur flex items-center justify-center z-20">
      <div
        onClick={() => setBooleanState(false)}
        className="w-full h-full absolute bg-slate-900/10"
      />
      <div className="max-w-7xl w-full h-[700px] flex flex-col bg-slate-100 rounded z-50 px-10 py-5">
        <div className="w-full my-5">
          <h3 className="font-semibold text-2xl text-slate-900">{title}</h3>
          <p className="font-light text-slate-900/50">{text}</p>
        </div>
        <form className="">{children}</form>
      </div>
    </div>
  );
};

export default PopUpCreationForm;
