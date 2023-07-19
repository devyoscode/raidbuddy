import React, { useState } from "react";
import Button from "@/components/ui/button";
import {
  BillingIcon,
  DownIcon,
  LogoutIcon,
  SettingsIcon,
  UpIcon,
  UserIcon,
} from "@/components/icons";
import { SessionContextValue, signOut, useSession } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";

const ProfileDropdown = () => {
  const session = useSession();
  console.log(session);
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="w-[7%] border-l-2 border-slate-900/10 flex items-center justify-center relative"
    >
      <Button variant="dropdown" size="sm">
        <div className="h-10 w-10 bg-gray-300 rounded-full mr-3 border border-slate-500 overflow-hidden shadow-md flex justify-center items-center">
          <img src={session.data?.user.picture} alt="Profile Picture" />
        </div>
        {toggle ? <UpIcon /> : <DownIcon />}
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
          className="absolute z-10 right-0 flex h-fit w-[250px] border border-slate-100 top-12 bg-white rounded shadow-md mt-[2px] flex-col py-2 px-[2px] gap-1"
        >
          <div className="h-12 border-b-2 border-slate-500/20 px-2">
            <span className="text-slate-900 font-medium ">
              {session.data?.user.username}
            </span>
            <p className="text-xs font-light text-slate-900/80">
              {session.data?.user.email}
            </p>
          </div>

          <Button variant="icon" size="dropdown">
            <UserIcon />
            Profile
          </Button>
          <Button variant="icon" size="dropdown">
            <BillingIcon />
            Billing
          </Button>
          <Button variant="icon" size="dropdown">
            <SettingsIcon />
            Settings
          </Button>

          <div className="h-fit w-full flex items-center justify-start border-t-2 py-1 border-slate-500/20">
            <Button onClick={() => signOut()} variant="icon" size="dropdown">
              <LogoutIcon />
              Logout
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileDropdown;
