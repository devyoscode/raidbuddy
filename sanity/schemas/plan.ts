import { defineField, defineType } from "sanity";

export default defineType({
  name: "plan",
  title: "Plan",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "teamLimit",
      title: "Team Limit",
      type: "string",
    }),
    defineField({
      name: "teamMemberLimit",
      title: "Team Member Limit",
      type: "string",
    }),
    defineField({
      name: "raidLimit",
      title: "Raid Limit",
      type: "string",
    }),
  ],
});
