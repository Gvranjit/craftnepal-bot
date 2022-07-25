import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function initializeDatabase() {
  try {
    const player = await prisma.players.findFirst();
    console.log(player);
  } catch (error) {
    console.log(error);
  }
}

export { initializeDatabase };
