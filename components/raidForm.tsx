"use client";

import React, { useState } from "react";
import { useStateContext } from "@/context/statecontext";
import PopUpCreationForm from "@/components/ui/popUpCreationForm";

const RaidForm = () => {
  const [raid, setRaid] = useState({
    title: "",
    description: "",
    startTime: "",
    closeTime: "",
    requirements: "",
    prohibitedRoles: "",
    leader: "test",
    team: "test",
  });

  const { setRaidCreation } = useStateContext();
  return (
    <PopUpCreationForm
      setBooleanState={setRaidCreation}
      title="Create Raid"
      text="Start a new Avalonian Group Dungeon."
    >
      <div className="w-full"></div>
    </PopUpCreationForm>
  );
};

export default RaidForm;
