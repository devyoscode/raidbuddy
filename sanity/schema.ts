import { type SchemaTypeDefinition } from "sanity";
import member from "@/sanity/schemas/member";
import participant from "@/sanity/schemas/participant";
import raid from "@/sanity/schemas/raid";
import role from "@/sanity/schemas/role";
import team from "@/sanity/schemas/team";
import user from "@/sanity/schemas/user";
import roaming from "@/sanity/schemas/roaming";
import roamingRole from "@/sanity/schemas/roamingRole";
import raidRole from "@/sanity/schemas/raidRole";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    member,
    participant,
    raid,
    role,
    team,
    user,
    raidRole,
    roaming,
    roamingRole,
  ],
};
