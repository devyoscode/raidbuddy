"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { iComponent } from "@/types/types";
import DashNavbar from "@/components/dashNavbar";
import { useStateContext } from "@/context/statecontext";
import RaidForm from "@/components/raidForm";
import RoamForm from "@/components/roamForm";

const Layout = ({ children }: iComponent) => {
  const { raidCreation, roamCreation } = useStateContext();

  return (
    <SessionProvider>
      <div className="min-w-screen w-full min-h-screen left-0 absolute flex-col flex bg-slate-50">
        {raidCreation && <RaidForm />}
        {roamCreation && <RoamForm />}
        <DashNavbar />
        {children}
      </div>
    </SessionProvider>
  );
};

export default Layout;
