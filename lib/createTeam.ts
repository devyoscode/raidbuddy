"use server";

import { client } from "@/sanity/lib/client";

export const createTeam = async (
  teamName: string,
  userId: string,
  invitationToken: string
) => {
  const Team = {
    _type: "team",
    teamName: teamName,
    discordChannel: "",
    discordServer: "",
    creator: {
      _ref: userId,
      _type: "reference",
    },
    creatorId: userId,
    invitationToken: invitationToken,
  };

  const createdTeam = await client.create({
    ...Team,
  });

  const Member = {
    _type: "member",
    userId: userId,
    teamId: createdTeam._id,
    user: {
      _ref: userId,
      _type: "reference",
    },
    teamName: createdTeam.teamName,
    team: {
      _ref: createdTeam._id,
      _type: "reference",
    },
    isAccepted: true,
  };

  return await client.create({
    ...Member,
  });
};
