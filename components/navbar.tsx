import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-between border-b-2 ">
      <Link
        href="/"
        className="text-3xl font-bold text-slate-900 w-1/3 flex justify-start"
      >
        raidbuddy
      </Link>
      <div className="w-1/3 flex items-center justify-center">
        <Button variant="link" size="sm">
          Features
        </Button>
        <Button variant="link" size="sm">
          Prices
        </Button>
        <Button variant="link" size="sm">
          Contact
        </Button>
      </div>
      <div className="w-1/3 flex items-center justify-end">
        <Button>Dashboard</Button>
      </div>
    </div>
  );
};

export default Navbar;
