import Image from 'next/image';

export default function Info() {
  return (
    <main className='grid h-[calc(100vh-2rem)] grid-cols-1 md:grid-cols-2'>
      <div className='relative'>
        <Image
          alt='location map'
          src='/map.png'
          className='pointer-events-none select-none object-fill'
          quality={100}
          fill
          sizes='(max-width: 768px) 30vw,
            (max-width: 1200px) 50vw,
            30vw'
          priority
        />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <h2 className='bg-lime-300 text-2xl text-lime-950'>Location</h2>
          <p className='mt-4 px-2 sm:px-0'>Rua do Castelo 25</p>
          <p className='px-2 sm:px-0'>2800-002 Lisboa</p>
          <p className='px-2 sm:px-0'>
            Next metro station: <br />
            Estação Baixa-Chiado (Linha Azul e Linha Verde)
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='bg-lime-300 text-2xl text-lime-950'>About</h2>
          <p className='px-2 sm:px-0'>
            As the clock struck midnight on a chilly evening in Lisbon, the heavy door of Rua do Castelo 25 swung open,
            revealing a passage into a realm of pulsating beats and electrifying energy. Within the depths of this
            unassuming building lay Cyberia, a clandestine haven where countless souls embarked on a journey through the
            sonic landscapes of the future.
          </p>
          <p className='px-2 sm:px-0'>
            Step by step, clubbers descended into the depths of Cyberia, leaving behind the mundane world above to
            immerse themselves in a labyrinth of rhythms and reverberations. Within these walls, echoes of legendary
            sets reverberated – from the mesmerizing symphonies of virtual reality spun by DJ Cybertron to the
            groundbreaking live performances of synth virtuosos.
          </p>
          <p className='px-2 sm:px-0'>
            Cyberia&apos;s history is a tapestry woven with threads of innovation and rebellion, a testament to the
            resilience of the underground spirit. From its humble beginnings as a clandestine gathering in the shadows
            of the city to its rise as a beacon of electronic evolution, Cyberia has weathered storms of adversity and
            emerged stronger with each beat.
          </p>
          <p className='px-2 sm:px-0'>
            Yet, this journey has not been without its challenges - from brushes with authority and clandestine
            operations to the eventual rebirth in a new digital frontier within the heart of Lisbon. Through it all, the
            Cyberia community has remained steadfast, united by a shared passion for sonic exploration and a vision of a
            future forged in sound.
          </p>
          <p className='px-2 sm:px-0'>
            To those who have danced amidst the flickering lights of Cyberia and to those who have yet to experience its
            embrace, know that beyond the fog lies a beacon of hope - a sanctuary where the rhythms of the past converge
            with the possibilities of tomorrow. This is our anthem. This is our sanctuary. This is Cyberia.
          </p>
        </div>
      </div>
    </main>
  );
}
