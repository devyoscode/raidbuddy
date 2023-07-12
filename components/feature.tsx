import React from "react";
import { iComponent } from "@/types/types";
import { CheckIcon, XIcon } from "@/components/icons";

const Feature = ({ children, check }: iComponent) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center ${
          check ? "text-green-600" : "text-red-600"
        }`}
      >
        {check ? <CheckIcon /> : <XIcon />}
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
};

export default Feature;
