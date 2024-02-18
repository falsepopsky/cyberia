// @ts-check
import { prisma } from './index.js';

const events = [
  {
    name: 'Layer 03 Launch Party !',
    description: 'Celebrating new LAYER 03 by Prompt on CYBERIA RECORDS, ALL NIGHT LONG !',
    lineup: 'Prompt',
    banner: '0.jpg',
  },
  {
    name: 'Layer 03 Release Party Pt. 2 Prompt N friends',
    description: 'Prompt and his friends celebrating the new LAYER 03 !',
    lineup: 'Prompt, Gmj, Hans, braska, Damico',
    banner: '1.jpg',
  },
  {
    name: 'Slapfunk - Cyberia',
    description:
      'We welcome renowned Amsterdam-based brand, Slapfunk, to Manchester for a marathon show at Brickworks with party starters, Ingi Visions, providing a 6 hour set. Joining them is dutch selector, Sanja and Libero residents.',
    lineup: 'Sam Gura b2b Greg, Ingi Trisions, San',
    banner: '2.jpg',
  },
  {
    name: 'Lockdown Sessions',
    description:
      'Turn off the lights, block out the windows and turn up some storming techno as Cleric invites Volvox and Stef Mendesidis along for a Lockdown Session.',
    lineup: 'Cler Kander b2b Kontain, sidis, Vlox',
    banner: '3.jpg',
  },
  {
    name: 'Rave Luck Club',
    description:
      'To commemorate Asian and Pacific Islander American Heritage Month (APAHM), two staples of the DC underground team up to celebrate with a stunning 15 hour streamed showcase of DJs and producers of Asian heritage.',
    lineup: 'Tsurugi, Sleepy G, DJ Dubu, Tang',
    banner: '4.jpg',
  },
  {
    name: 'Layer Up',
    description:
      'Get ready to peel back the layers of sound and embark on a sonic adventure! This event will take you deeper into the world of music, exploring different genres, styles, and textures. Immerse yourself in the beats, groove to the rhythm, and discover new musical landscapes with every layer.',
    lineup:
      'Circuit Weaver, Subatomic Pulse, Hyperspace Collective, Zenith Pulse, Fractaled Mind, Deep Resonance, Binary Code, Mindmeld',
    banner: '5.jpg',
  },
  {
    name: 'Cyborg Circus',
    description:
      'Prepare to be transcended by the fusion of cutting-edge technology and pulse-pounding beats! Imagine robots with rhythm boxes, dancers with neon accents, and a soundscape that will electrify your senses. Be part of the spectacle as the lines between human and machine blur, creating an unforgettable night of digital revelry.',
    lineup:
      'Circuit Breakers, Glitchtronic, Neuromancer, Cybernetic Symphony, Datastream, Circuit Ghost, Binary Sunset, The Algorithm',
    banner: '6.jpg',
  },
  {
    name: 'Unleashed',
    description:
      "Break free from the mainstream and dive into the vibrant world of underground music! This event is for those who crave raw energy, innovative artists, and a scene that pushes boundaries. Prepare to be surprised, challenged, and exhilarated by the sounds that haven't yet hit the charts. Let loose and unleash your inner party animal!",
    lineup:
      'Basement Dwellers, Industrial Waste, Acid Reign, Black Box, Subterrain Network, Distortion Unit, Forbidden Frequencies, Unknown Entity',
    banner: '7.jpg',
  },
  {
    name: 'Frequency Shift',
    description:
      'Get ready to experience a sonic metamorphosis! This event will transport you to new sonic dimensions, warping your perception of reality through innovative soundscapes and cutting-edge technology. Be prepared to shift your frequency, embrace the unknown, and embark on a journey of musical discovery.',
    lineup: 'Cosmic Echoes, Hyperspatial Drift, Dimensional Rift, The Anomaly',
    banner: '8.jpg',
  },
  {
    name: 'Glitch Garden',
    description:
      'Step into a digital wonderland where pixels meet petals and beats blossom like flowers! This event is a feast for the senses, with vibrant visuals, immersive sounds, and an atmosphere that pulsates with life. Prepare to be transported to a world where technology comes alive, creating a unique and unforgettable experience.',
    lineup: 'Pixel Dreams, Bloom & Bass, Digital Garden',
    banner: '9.jpg',
  },
];

function randomPrices() {
  const prices = ['free', '10', '25', '5'];
  const randomIndex = Math.floor(Math.random() * prices.length);
  return prices[randomIndex];
}

function weekendDays() {
  const patternDate = new Date();
  const currentDate = new Date();
  const weekend = [];
  currentDate.setDate(1);

  // Loop through all days in the current month
  while (currentDate.getMonth() === patternDate.getMonth()) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
      weekend.push(new Date(currentDate)); // Add Friday = 5, Saturday = 6, or Sunday = 0 to array
    }
    currentDate.setDate(currentDate.getDate() + 1); // Advance to next day
  }

  return weekend;
}

const weekend = weekendDays();

async function seedData() {
  if (weekend.length >= events.length) {
    try {
      for (const [index, event] of events.entries()) {
        await prisma.schedule.create({
          data: {
            date: weekend[index],
            startTime: '10 am',
            events: {
              create: {
                name: event.name,
                lineup: event.lineup,
                description: event.description,
                banner: event.banner,
                price: randomPrices(),
              },
            },
          },
          include: {
            events: true,
          },
        });
      }
      console.log('Database seeding completed successfully! 🌱');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      await prisma.$disconnect();
    }
  } else {
    throw new Error("The current month doesn't cover all the events");
  }
}

await seedData();
