import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function initializeDatabase() {
  const player = await prisma.players.findFirst();
  console.log(player);
}
initializeDatabase();
