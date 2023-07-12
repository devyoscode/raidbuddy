import { defineField, defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "email",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "string",
    }),
    defineField({
      name: "providerId",
      title: "Provider ID",
      type: "string",
    }),
    defineField({
      name: "raids",
      title: "Raids",
      type: "array",
      of: [{ type: "reference", to: { type: "raid" } }],
    }),
    defineField({
      name: "teams",
      title: "Teams",
      type: "array",
      of: [{ type: "reference", to: { type: "team" } }],
    }),
  ],
});
