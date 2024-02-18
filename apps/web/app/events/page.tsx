import Image from 'next/image';
import Link from 'next/link';
import { getScheduleEvents } from './queries';

export default async function Events() {
  const data = await getScheduleEvents();

  const events = data?.map((event) => {
    const formattedDate = event.date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    });
    const artists = event.events[0].lineup.split(',');

    return (
      <div key={event.id} className='first:mt-8 last:mb-8'>
        <Link
          className='flex max-w-max flex-row items-center gap-2 bg-indigo-700/30 px-1 text-lg text-indigo-200'
          href={`/events/${event.events[0].id}`}
        >
          <p className='select-none'>{formattedDate}</p>
          <svg width='18' height='18' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            />
          </svg>
        </Link>
        <p className='my-1 px-1 text-xl/relaxed text-neutral-100'>{event.events[0].name}</p>
        <div className='grid grid-cols-2'>
          {artists.map((artist) => (
            <p className='px-1 text-neutral-300' key={artist}>
              {artist}
            </p>
          ))}
        </div>
      </div>
    );
  });

  const carousel = data?.map((event) => {
    return (
      <div key={event.id} className='relative w-full shrink-0 snap-start snap-normal'>
        <Image
          alt={event.events[0].name}
          src={`/${event.events[0].banner}`}
          className='pointer-events-none select-none object-fill'
          quality={100}
          fill
          sizes='(max-width: 768px) 30vw,
            (max-width: 1200px) 50vw,
            30vw'
        />
        <Link
          className='absolute bottom-0 bg-neutral-950 px-1 text-lg text-neutral-100'
          href={`/events/${event.events[0].id}`}
        >
          {event.events[0].name}
        </Link>
      </div>
    );
  });

  return (
    <main className='grid h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-2'>
      <div className='relative'>
        <div className='sticky top-0 h-screen'>
          <div className='relative flex h-full w-full snap-x scroll-pl-0 overflow-x-auto'>{carousel}</div>
        </div>
      </div>
      <div className='flex flex-col gap-8'>{events}</div>
    </main>
  );
}
