import React from "react";
import { iInput } from "@/types/types";

const Input = ({ title, setState, state }: iInput) => {
  return (
    <div className="">
      <h5 className="">{title}</h5>
      <input type="text" className="" />
    </div>
  );
};

export default Input;
