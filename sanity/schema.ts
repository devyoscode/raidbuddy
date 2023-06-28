import { type SchemaTypeDefinition } from 'sanity'
import account from "@/sanity/schemas/account";
import member from "@/sanity/schemas/member";
import participant from "@/sanity/schemas/participant";
import raid from "@/sanity/schemas/raid";
import role from "@/sanity/schemas/role";
import session from "@/sanity/schemas/session";
import team from "@/sanity/schemas/team";
import user from "@/sanity/schemas/user";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [account, member, participant, raid, role, session, team, user],
}
