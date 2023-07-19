import { defineField, defineType } from "sanity";

export default defineType({
  name: "subscription",
  title: "Subscription",
  type: "document",
  fields: [
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    }),
    defineField({
      name: "expirationDate",
      title: "Expiration Date",
      type: "datetime",
    }),
    defineField({
      name: "plan",
      title: "Plan",
      type: "reference",
      to: { type: "plan" },
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "reference",
      to: { type: "team" },
    }),
  ],
});
