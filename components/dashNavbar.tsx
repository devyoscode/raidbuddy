import React from "react";
import TeamsDropdown from "@/components/teamsDropdown";
import { useSession } from "next-auth/react";
import Clock from "@/components/ui/clock";
import ProfileDropdown from "@/components/profileDropdown";
import Button from "@/components/ui/button";

const DashNavbar = () => {
  const session = useSession();
  if (session.status === "authenticated") {
    return (
      <header className="h-16 w-full border-b-2 flex items-center justify-between gap-5 pr-5">
        <TeamsDropdown />

        <nav className="flex w-full border-l-2 border-slate-900/20 pl-3">
          <Button link="/overview" variant="link" size="sm">
            Overview
          </Button>

          <Button link="/history" variant="link" size="sm">
            History
          </Button>

          <Button link="/teams" variant="link" size="sm">
            Teams
          </Button>
        </nav>

        <Clock />

        <ProfileDropdown />
      </header>
    );
  }
};

export default DashNavbar;
