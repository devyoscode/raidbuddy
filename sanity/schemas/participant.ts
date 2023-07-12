import { defineField, defineType } from "sanity";

export default defineType({
  name: "participant",
  title: "Participant",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "discordId",
      title: "Discord ID",
      type: "string",
    }),
    defineField({
      name: "discordNickname",
      title: "Discord Nickname",
      type: "string",
    }),
    defineField({
      name: "discordServer",
      title: "Discord Server",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "reference",
      to: { type: "raidRole" },
    }),
    defineField({
      name: "raid",
      title: "Raid",
      type: "reference",
      to: { type: "raid" },
    }),
  ],
});
