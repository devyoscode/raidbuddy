import React from "react";
import { iSubscription } from "@/types/types";
import Button from "@/components/ui/button";

const Subscription = ({
  title,
  children,
  price,
  disclaimer,
}: iSubscription) => {
  return (
    <div className="flex flex-col pb-10">
      <div
        className={`h-[348px] w-[348px] px-8 gap-2 ${
          title === "Individual"
            ? "bg-slate-900 text-slate-50"
            : "bg-gray-200 text-slate-900"
        }  flex flex-col justify-center`}
      >
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">
          Borem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <span className="text-4xl font-semibold mt-2">{price}</span>
        <p className="mt-[-2px] text-xs font-light pl-[1px] opacity-50">
          {disclaimer}
        </p>
        <div className="flex w-full items-center justify-between my-2">
          <Button variant={title === "Individual" ? "flipped" : ""}>
            Dashboard
          </Button>
          <Button variant="secondary">
            {title === "Free" ? "Get STARTED" : "Try for FREE"}
          </Button>
        </div>
      </div>
      <h5 className="font-semibold text-xl my-5">Top Features</h5>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default Subscription;
