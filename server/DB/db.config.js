import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const prisma =globalForPrisma.prisma || new PrismaClient({
    log: ["query", "error", "info", "warn"]
});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma; // Store the Prisma instance globally
}

export default prisma;