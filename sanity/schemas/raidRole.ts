import { defineField, defineType } from "sanity";

export default defineType({
  name: "raidRole",
  title: "Raid Role",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "reference",
      to: { type: "role" },
    }),
    defineField({
      name: "raid",
      title: "Raid",
      type: "reference",
      to: { type: "raid" },
    }),
    defineField({
      name: "participant",
      title: "Participant",
      type: "reference",
      to: { type: "participant" },
    }),
  ],
});
