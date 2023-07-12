"use client";

import React, { useEffect } from "react";
import raidImage from "../../../public/raidImage.jpg";
import Image from "next/image";
import Spinner from "@/components/ui/spinner";
import { signIn } from "next-auth/react";

const Page = () => {
  useEffect(() => {
    setTimeout(async () => {
      signIn("discord").then();
    }, 200);
  }, []);

  return (
    <div className="gradient-bg w-screen h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full h-[500px] bg-slate-50 flex">
        <div className="w-1/2 h-full flex items-center p-2 opacity-80">
          <Image
            src={raidImage}
            alt="Raid image"
            className="imagines"
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col items-center py-5 px-5">
          <h3 className="text-xl font-semibold text-slate-900/20 w-full flex justify-end mb-5">
            raidbuddy
          </h3>
          <p className="text-3xl font-semibold text-slate-900/80">Sign In</p>
          <p className="font-light text-slate-900/70">
            We're redirecting you to Discord.
          </p>
          <div className="h-full flex items-center justify-center">
            <Spinner />
          </div>
          <p className="text-xs font-light text-slate-900/40 text-center">
            By continuing, you are setting up a Raidbuddy account and agree to
            our User Agreement and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
