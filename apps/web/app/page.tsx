import Image from 'next/image';

export default function Home() {
  return (
    <main className='grid h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-2'>
      <div className='relative hidden md:flex'>
        <Image
          alt='lines by adrien olichon'
          src='/lines.jpg'
          className='pointer-events-none select-none object-fill'
          quality={100}
          fill
          sizes='(max-width: 768px) 30vw,
            (max-width: 1200px) 50vw,
            30vw'
          priority
        />
      </div>
      <div className='relative flex h-full flex-col flex-nowrap items-center justify-center gap-16'>
        <div className='bg-main absolute -z-50 h-full w-full blur-2xl sm:bg-[length:160px_160px,_100px_100px] lg:blur-3xl' />
        <div>
          <h1 className='max-w-max bg-gradient-to-r from-zinc-200 to-zinc-50 bg-clip-text pb-8 text-5xl font-normal leading-tight text-transparent md:text-4xl lg:text-5xl'>
            cyberia nightclub
          </h1>
        </div>

        <svg width='240' height='240' viewBox='0 0 420 420' aria-hidden='true' focusable='false'>
          <g fill='#fafafa'>
            <circle cx='86' cy='316.85907' r='16' />
            <circle cx='294' cy='190.85909' r='64' />
            <circle cx='86' cy='60.859077' r='16' />
            <circle cx='166' cy='252.85905' r='32' />
            <circle cx='166' cy='124.85909' r='32' />
          </g>
        </svg>
      </div>
    </main>
  );
}
