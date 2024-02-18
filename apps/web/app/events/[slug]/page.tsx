import Image from 'next/image';
import { getEvent, getEvents } from '../queries';

interface ParamsProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const data = await getEvents();

  return data?.map(({ id }) => ({
    slug: id,
  }));
}

export default async function Event({ params }: ParamsProps) {
  const { slug } = params;
  const data = await getEvent(slug);
  const lineupArray = data?.lineup.includes(',') ?? false;
  const artists = lineupArray ? data?.lineup.split(',') : data?.lineup;

  return (
    <main className='grid h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-2'>
      <div className='relative'>
        <Image
          alt={data?.name ?? 'event banner'}
          src={`/${data?.banner}`}
          className='pointer-events-none select-none object-fill'
          quality={100}
          fill
          sizes='(max-width: 768px) 30vw,
            (max-width: 1200px) 50vw,
            30vw'
          priority
        />
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='mt-6 text-center text-3xl text-indigo-400'>{data?.name}</h1>
        <p className='px-2 text-xl'>{data?.description}</p>

        <div className='grid grid-cols-2 gap-y-4'>
          <div className='bg-lime-300 pl-2 text-2xl text-lime-950'>
            <p>Lineup</p>
          </div>
          <div className='bg-slate-300 pl-2 text-2xl text-slate-800'>
            {typeof artists === 'string' ? (
              <p>{artists}</p>
            ) : (
              artists?.map((artist, i) => {
                return <p key={i}>{artist}</p>;
              })
            )}
          </div>
          <div className='bg-lime-300 pl-2 text-2xl text-lime-950'>
            <p>Entry fee</p>
          </div>
          <div className='bg-slate-300 pl-2 text-2xl text-slate-800'>
            <p>{data?.price}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
