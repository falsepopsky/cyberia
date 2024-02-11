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

export async function Event({ params }: ParamsProps) {
  const { slug } = params;

  const data = await getEvent(slug);

  return (
    <main className='grid h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-2'>
      <div>
        <h1>{data?.banner}</h1>
      </div>
      <div className='flex flex-col gap-8'>
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
        <p>{data?.price}</p>
        <p>{data?.lineup}</p>
      </div>
    </main>
  );
}
