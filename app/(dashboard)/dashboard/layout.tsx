"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { iComponent } from "@/types/types";
import DashNavbar from "@/components/dashNavbar";

const Layout = ({ children }: iComponent) => {
  return (
    <SessionProvider>
      <div className="min-w-screen w-full min-h-screen left-0 absolute flex-col flex bg-slate-50">
        <DashNavbar />
        {children}
      </div>
    </SessionProvider>
  );
};

export default Layout;
