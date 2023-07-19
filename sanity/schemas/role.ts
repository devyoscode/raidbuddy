import { defineField, defineType } from "sanity";

export default defineType({
  name: "role",
  title: "Role",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "maximum",
      title: "Maximum",
      type: "number",
    }),
    defineField({
      name: "minimum",
      title: "Minimum",
      type: "number",
    }),
  ],
});
