"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import RecentRaids from "@/components/recentRaids";
import TeamActivity from "@/components/teamActivity";
import Attendance from "@/components/attendance";
import Button from "@/components/ui/button";
import { PlusIcon } from "@/components/icons";

const Page = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") router.push("/");
  });

  if (session.status === "loading") {
    return (
      <div className=" flex min-h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );
  } else if (session.status === "authenticated") {
    return (
      <div className="max-w-7xl w-full mx-auto  flex flex-col mt-5">
        <div className="w-full h-12 flex items-center justify-between">
          <div className=" h-full flex flex-col">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-sm">
              Welcome back,{" "}
              <b className="font-semibold">{session.data.user.username}</b>.
            </p>
          </div>
          <div className="flex gap-5">
            <Button variant="flipped">
              <PlusIcon />
              New Roam
            </Button>
            <Button>
              <PlusIcon />
              New Raid
            </Button>
          </div>
        </div>
        <div className="flex">
          <RecentRaids />
          <TeamActivity />
        </div>
        <Attendance />
      </div>
    );
  }
};

export default Page;
