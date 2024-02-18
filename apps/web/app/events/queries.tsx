import { prisma } from '@cyberia/db';

export async function getScheduleEvents() {
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

export async function getEvents() {
  try {
    const data = await prisma.event.findMany({
      include: {
        schedule: true,
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

export async function getEvent(id: string) {
  try {
    const data = await prisma.event.findFirst({
      where: {
        id,
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
