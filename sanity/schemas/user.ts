import {defineField, defineType} from "sanity";

export default defineType({
    name: "user",
    title: "User",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "email"
        }),
        defineField({
            name: "username",
            title: "Username",
            type: "string"
        }),
        defineField({
            name: "account",
            title: "Account",
            type: "reference",
            to: {type: "account"}
        }),
        defineField({
            name: "sessions",
            title: "Sessions",
            type: "array",
            of: [{type: "reference", to: {type: "session"}}]
        }),
        defineField({
            name: "raids",
            title: "Raids",
            type: "array",
            of: [{type: "reference", to: {type: "raid"}}]
        }),
        defineField({
            name: "teams",
            title: "Teams",
            type: "array",
            of: [{type: "reference", to: {type: "team"}}]
        }),
    ]
})