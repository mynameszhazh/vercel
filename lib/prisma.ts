import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
try {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
} catch (error) {
  console.log("error:", error);
}
export default prisma;
