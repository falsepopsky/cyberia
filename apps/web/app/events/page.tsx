// import { getEvents } from './queries';

export default function Events() {
  /*   const data = await getEvents();
  console.log(data);

  const events = data?.map((event) => {
    return (
      <div key={event.id}>
        <p>{event.startTime}</p>
        <p>{event.date.toDateString()}</p>
        <p>{event.events[0].name}</p>
        <p>{event.events[0].lineup}</p>
        <p>{event.events[0].price}</p>
        <p>{event.events[0].description}</p>
        <p>{event.events[0].banner}</p>
      </div>
    );
  }); */

  return (
    <main className='grid h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-2'>
      <div>
        <p>Slow down on me</p>
      </div>
      <div>
        <p>Slow down on me</p>
      </div>
    </main>
  );
}
