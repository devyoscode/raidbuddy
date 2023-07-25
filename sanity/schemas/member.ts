import { defineField, defineType } from "sanity";

export default defineType({
  name: "member",
  title: "Member",
  type: "document",
  fields: [
    defineField({
      name: "userId",
      title: "User ID",
      type: "string",
    }),
    defineField({
      name: "teamId",
      title: "Team ID",
      type: "string",
    }),
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
    }),
    defineField({
      name: "teamName",
      title: "Team Name",
      type: "string",
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "reference",
      to: { type: "team" },
    }),
    defineField({
      name: "isAccepted",
      title: "Is Accepted",
      type: "boolean",
    }),
  ],
});
