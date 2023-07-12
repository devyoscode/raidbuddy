import { defineField, defineType } from "sanity";

export default defineType({
  name: "roamingRole",
  title: "Roaming Role",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "reference",
      to: { type: "role" },
    }),
    defineField({
      name: "roaming",
      title: "roaming",
      type: "reference",
      to: { type: "roaming" },
    }),
    defineField({
      name: "participant",
      title: "Participant",
      type: "reference",
      to: { type: "participant" },
    }),
  ],
});
