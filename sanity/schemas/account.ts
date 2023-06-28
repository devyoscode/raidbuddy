import {defineField, defineType} from "sanity";

export default defineType({
    name: 'account',
    title: 'Account',
    type: 'document',
    fields: [
        defineField({
            name: 'userId',
            title: 'User ID',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'provider',
            title: 'Provider',
            type: 'String',
        }),
        defineField({
            name: 'providerAccountId',
            title: 'Provider Account ID',
            type: 'string',
        }),
        defineField({
            name: 'refreshToken',
            title: 'Refresh Token',
            type: 'String',
        }),
        defineField({
            name: 'accessToken',
            title: 'Access Token',
            type: 'String',
        }),
        defineField({
            name: 'tokenExpiration',
            title: 'Token Expiration',
            type: 'string',
        }),
        defineField({
            name: 'tokenType',
            title: 'Token Type',
            type: 'string',
        }),
        defineField({
            name: 'scope',
            title: 'Scope',
            type: 'string',
        }),
        defineField({
            name: 'idToken',
            title: 'ID Token',
            type: 'string',
        }),
        defineField({
            name: 'sessionState',
            title: 'Session State',
            type: 'string',
        }),
        defineField({
            name: 'user',
            title: 'User',
            type: 'reference',
            to: {type: 'user'}
        }),
    ],
})