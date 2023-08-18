// @ts-check
import { prisma } from './index.js';

async function seedData() {
  try {
    const schedule = await prisma.schedule.create({
      data: {
        date: new Date('2023-08-17'),
        startTime: '09 am',
        events: {
          create: [
            {
              name: 'Meeting',
              description: 'Team meeting at 12:00 am',
              lineup: 'Team members',
              banner: 'meeting.jpg',
              price: 'free',
            },
            {
              name: 'Pre-party Night',
              description: 'Pre-party gathering at 8:00 pm',
              lineup: 'DJ, Drinks, Snacks',
              banner: 'pre_party.jpg',
              price: 'free',
            },
            {
              name: 'Party',
              description: 'Party starts at 11:00 pm for all',
              lineup: 'Live Music, DJ, Dance Floor',
              banner: 'party.jpg',
              price: '10',
            },
          ],
        },
      },
      include: {
        events: true,
      },
    });

    console.log('Seeded schedule and events:', schedule);
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
