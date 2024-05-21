"use server";
import { db } from "@/drizzle/client";
import { revalidateTag, unstable_cache } from "next/cache";
import { spec, objectTypeEnum, optionsNumberEnum } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const getSpecsByFilters = unstable_cache(
  async (filters?:{objectType:typeof objectTypeEnum}) => {
    const objectType = filters?.objectType;
    const dbData = await db.query.spec.findMany({
      with: {
        object_type: objectType
      }
    })
    return dbData;
  },
  [],
  { tags: ["specs"] }
)

export const getSpecById = unstable_cache(
  async (id:number) => {
    const dbData = await db.query.spec.findFirst({
      with: {
        id: id,
        option: true
      }
    })
    return dbData;
  },
  [],
  { tags: ["specs"] }
)

export const deleteSpecById = unstable_cache(
  async (id:number): Promise<void> => {
    await db.delete(spec).where(eq(spec.id, id));
    revalidateTag("specs");
  },
  [],
  { tags: ["specs"] }
)

export async function getEmptySpec() {
  return {
    id: undefined,
    name_service: "",
    name_public: "",
    object_type: "org",
  }
}