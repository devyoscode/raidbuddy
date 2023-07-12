"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { iComponent } from "@/types/types";

const Layout = ({ children }: iComponent) => {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center">{children}</div>
  );
};

export default Layout;
