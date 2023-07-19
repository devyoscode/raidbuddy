import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "discordChannel",
      title: "Discord Channel",
      type: "string",
    }),
    defineField({
      name: "discordServer",
      title: "Discord Server",
      type: "string",
    }),
    defineField({
      name: "creatorId",
      title: "Creator ID",
      type: "string",
    }),
    defineField({
      name: "creator",
      title: "Creator",
      type: "reference",
      to: { type: "user" },
    }),
    defineField({
      name: "invitationToken",
      title: "Invitation Token",
      type: "string",
    }),
  ],
});
