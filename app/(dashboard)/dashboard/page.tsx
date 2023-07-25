"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import RecentRaids from "@/components/recentRaids";
import TeamActivity from "@/components/teamActivity";
import Attendance from "@/components/attendance";
import Button from "@/components/ui/button";
import { PlusIcon } from "@/components/icons";
import DashFooter from "@/components/dashFooter";
import { useStateContext } from "@/context/statecontext";
import { getMembership } from "@/lib/getMembership";
import TeamForm from "@/components/teamForm";
import { Spinner } from "@/components/ui/spinner";

const Page = () => {
  const router = useRouter();
  const session = useSession();
  const {
    setRaidCreation,
    setUserTeams,
    userTeams,
    isTeamMember,
    setIsTeamMember,
    setRoamCreation,
  } = useStateContext();

  useEffect(() => {
    if (session.status === "unauthenticated") router.push("/");
  });

  useEffect(() => {
    if (session.status !== "authenticated") return;

    getMembership(session.data.user.id).then((response) => {
      if (response.length < 1) {
        setIsTeamMember("false");
        return;
      }

      if (response.length >= 1) {
        setUserTeams(response);
        setIsTeamMember("true");
      }
    });
  }, [session]);

  if (session.status === "loading") {
    return (
      <div className=" flex min-h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );
  } else if (session.status === "authenticated") {
    return (
      <div className="max-w-7xl w-full mx-auto  flex flex-col mt-5 relative">
        {isTeamMember === "false" && <TeamForm userId={session.data.user.id} />}
        <div className="w-full h-12 flex items-center justify-between">
          <div className=" h-full flex flex-col">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-sm">
              Welcome back,{" "}
              <b className="font-semibold">{session.data.user.username}</b>.
            </p>
          </div>
          <div className="flex gap-5">
            <Button onClick={() => setRoamCreation(true)} variant="flipped">
              <PlusIcon />
              New Roam
            </Button>
            <Button onClick={() => setRaidCreation(true)}>
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
        <DashFooter />
      </div>
    );
  }
};

export default Page;
