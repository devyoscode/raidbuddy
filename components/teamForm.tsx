import React, { useState } from "react";
import PopUpCreationForm from "@/components/ui/popUpCreationForm";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { createTeam } from "@/lib/createTeam";
import { SuccessIcon } from "@/components/icons";
import { ButtonSpinner } from "@/components/ui/spinner";
import { useStateContext } from "@/context/statecontext";

const TeamForm = ({ userId }: { userId: string }) => {
  const token = Math.random().toString(8).substring(2);

  const [teamName, setTeamName] = useState("");
  const [invitationToken, setInvitationToken] = useState(token);
  const [status, setStatus] = useState("button");
  const { setIsTeamMember } = useStateContext();

  const handleClick = () => {
    setStatus("loading");
    createTeam(teamName, userId, invitationToken)
      .then(() => {
        setStatus("success");
        setIsTeamMember("true");
      })
      .catch((e) => console.log(e));
    setTimeout(() => {
      setStatus("button");
    }, 1000);
  };

  return (
    <div className="fixed w-screen h-screen top-0 flex left-0">
      <PopUpCreationForm
        title="Create a Team"
        text="A team is necessary to use Raidbuddy."
      >
        <div className="flex gap-5">
          <Input title="Team Name" state={teamName} setState={setTeamName} />
          <Input
            title="Invitation Token"
            state={invitationToken}
            setState={setInvitationToken}
          />
        </div>
        <div className="mb-3 mt-5 flex items-center justify-center">
          <Button onClick={() => handleClick()}>
            {status === "button" && "Create Team"}
            {status === "loading" && <ButtonSpinner />}
            {status === "success" && <SuccessIcon />}
          </Button>
        </div>
      </PopUpCreationForm>
    </div>
  );
};

export default TeamForm;
