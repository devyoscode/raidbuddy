import type { User } from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User {
    id: UserId;
    username: string;
    email: string;
    picture: string;
  }
}
