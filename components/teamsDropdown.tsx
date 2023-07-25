import React, { useState } from "react";
import Button from "@/components/ui/button";
import { DownIcon, PlusIcon, UpIcon } from "@/components/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useStateContext } from "@/context/statecontext";
import { iMembership } from "@/types/types";

const TeamsDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const { userTeams, activeTeam } = useStateContext();

  return (
    <div onClick={() => setToggle(!toggle)} className="flex px-5 flex-shrink-0">
      <Button variant="dropdown">
        <div className="text-2xl font-bold mr-4">
          {userTeams[activeTeam]?.teamName}
        </div>
        <span className="mt-1">{toggle ? <UpIcon /> : <DownIcon />}</span>
      </Button>

      <DropDownMenu toggle={toggle} />

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed w-screen h-screen top-0 left-0 flex opacity-10 bg-slate-200 z-20"
        />
      )}
    </div>
  );
};

const DropDownMenu = ({ toggle }: { toggle: boolean }) => {
  const { userTeams, setIsTeamMember, setActiveTeam } = useStateContext();

  const Team = ({ name }: { name: string }) => {
    const handleClick = () => {
      if (!userTeams) return;

      const team = userTeams.findIndex(
        (team: iMembership) => team.teamName === name
      );

      setActiveTeam(team);
    };
    return (
      <div className="h-fit border-slate-500/20 px-2">
        <Button onClick={() => handleClick()} variant="link" size="dropdown">
          {name}
        </Button>
      </div>
    );
  };

  return (
    <AnimatePresence initial={false}>
      {toggle && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute z-50 flex h-fit w-[250px] border border-slate-100 top-14 bg-white rounded shadow-md mt-[5px] flex-col py-2 px-[2px] gap-1"
        >
          {/*   TODO:  Create different query for teams, as this one queries the membership.*/}
          <h5 className="text-sm opacity-50 px-2">Teams</h5>
          {userTeams.map((team: iMembership) => (
            <Team key={team._id} name={team.teamName} />
          ))}

          <div className="h-fit w-full flex items-center justify-start border-t-2 py-1 border-slate-500/20">
            <Button
              onClick={() => setIsTeamMember("false")}
              variant="icon"
              size="dropdown"
            >
              <PlusIcon />
              Create Team
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamsDropdown;
