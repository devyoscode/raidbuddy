import {defineField, defineType} from "sanity";

export default defineType({
    name: "team",
    title: "Team",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "discordChannel",
            title: "Discord Channel",
            type: "string"
        }),
        defineField({
            name: "discordServer",
            title: "Discord Server",
            type: "string"
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
            to: {type: "user"}
        }),
        defineField({
            name: "members",
            title: "Members",
            type: "array",
            of: [{type: "reference", to: {type: "member"}}]
        }),
        defineField({
            name: "raids",
            title: "Raids",
            type: "array",
            of: [{type: "reference", to: {type: "raid"}}]
        }),
    ]
})