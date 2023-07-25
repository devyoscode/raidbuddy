import { client } from "@/sanity/lib/client";

export const getMembership = async (userId: string) => {
  // TODO: Change to getMembership
  return await client.fetch(`*[_type == "member" && userId == $id]`, {
    id: userId,
  });
};
