import { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import { SanityAdapter } from "next-auth-sanity";
import { client } from "@/sanity/lib/client";
import { iUser } from "@/types/types";

export const authOptions: NextAuthOptions = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ token, session }) {
      if (!session) {
        throw new Error("Session is undefined.");
      }

      if (token) {
        session.user = token.user;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (!user) return token;
      // Next-js calls this twice and the second time user is undefined, but token is already filled with the necessary data.

      let dbUser = await client.fetch(
        `*[_type == "user" && providerId == $id][0]`,
        { id: user.id }
      );

      if (!dbUser) {
        const User: iUser = {
          _type: "user",
          username: user.name || "",
          providerId: user.id,
          email: user.email,
          picture: user.image || "",
        };

        dbUser = await client.create({
          ...User,
        });
      }

      token.user = {
        id: dbUser._id,
        username: dbUser.username,
        email: dbUser.email,
        picture: dbUser.picture,
      };
      return token;
    },
    redirect() {
      return "/dashboard";
    },
  },
  adapter: SanityAdapter(client),
};
