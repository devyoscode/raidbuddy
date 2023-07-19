import { defineField, defineType } from "sanity";

export default defineType({
  name: "raid",
  title: "Raid",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      type: "datetime",
    }),
    defineField({
      name: "closeTime",
      title: "Close Time",
      type: "datetime",
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "string",
    }),
    defineField({
      name: "prohibitedRoles",
      title: "Prohibited Roles",
      type: "string",
    }),
    defineField({
      name: "leader",
      title: "Leader",
      type: "reference",
      to: { type: "user" },
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "reference",
      to: { type: "team" },
    }),
  ],
});
