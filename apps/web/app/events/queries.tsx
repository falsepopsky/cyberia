import { prisma } from '@cyberia/db';

export async function getEvents() {
  try {
    const data = await prisma.schedule.findMany({
      include: {
        events: true,
      },
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Something wrong happened', error.message);
    } else {
      console.log(error);
    }
  }
}
