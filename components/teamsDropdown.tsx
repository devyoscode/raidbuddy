import React, { useState } from "react";
import Button from "@/components/ui/button";
import { DownIcon, PlusIcon, UpIcon } from "@/components/icons";
import { SessionContextValue, signOut, useSession } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";

const TeamsDropdown = () => {
  const session = useSession();
  const [toggle, setToggle] = useState(false);

  return (
    <div onClick={() => setToggle(!toggle)} className="flex px-5 flex-shrink-0">
      <Button variant="dropdown">
        <div className="text-2xl font-bold mr-4">The Lonely Men</div>
        <span className="mt-1">{toggle ? <UpIcon /> : <DownIcon />}</span>
      </Button>

      <DropDownMenu toggle={toggle} session={session} />

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed w-screen h-screen top-0 left-0 flex opacity-10 bg-slate-200"
        />
      )}
    </div>
  );
};

const DropDownMenu = ({
  toggle,
  session,
}: {
  toggle: boolean;
  session: SessionContextValue;
}) => {
  return (
    <AnimatePresence initial={false}>
      {toggle && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute z-10 flex h-fit w-[250px] border border-slate-100 top-14 bg-white rounded shadow-md mt-[5px] flex-col py-2 px-[2px] gap-1"
        >
          <div className="h-12 border-slate-500/20 px-2">
            <h5 className="text-sm opacity-50">Teams</h5>
            <Button variant="link" size="dropdown">
              The Lonely Men
            </Button>
          </div>

          <div className="h-fit w-full flex items-center justify-start border-t-2 py-1 border-slate-500/20">
            <Button onClick={() => signOut()} variant="icon" size="dropdown">
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
