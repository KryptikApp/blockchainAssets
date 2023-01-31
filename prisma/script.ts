import { NetworkDb, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addManyNetworks(networks: NetworkDb[]) {
  console.log("here");
  try {
    const res = await prisma.networkDb.createMany({ data: networks });
    console.log("result:");
    console.log(res);
  } catch (e) {
    console.log("Error hile uploading networks:");
    console.log(e);
  }
  return;
}
