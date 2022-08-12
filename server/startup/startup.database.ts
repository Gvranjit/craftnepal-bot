import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function initializeDatabase() {
  try {
    const player = await prisma.players.findFirst();
    console.info(player);
  } catch (error) {
    console.error(error);
  }
}

export { initializeDatabase };
