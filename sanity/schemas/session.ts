import {defineField, defineType} from "sanity";

export default defineType({
    name: "session",
    title: "Session",
    type: "document",
    fields: [
        defineField({
            name: "sessionToken",
            title: "Session Token",
            type: "string"
        }),
        defineField({
            name: "userId",
            title: "User ID",
            type: "string"
        }),
        defineField({
            name: "expires",
            title: "Expires",
            type: "datetime",
        }),
        defineField({
            name: "user",
            title: "User",
            type: "reference",
            to: {type: "user"}
        }),
    ]
})