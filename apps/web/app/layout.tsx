import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['300', '400', '500'],
  style: 'normal',
  preload: false,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'cyberia',
  description: 'Legendary nightclub from Ovar.',
  keywords: 'cyberia, nightclub',
  colorScheme: 'dark',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className={ibm_plex_sans.className}>
      <body className='w-full overflow-y-auto overflow-x-hidden bg-neutral-900 text-neutral-200 selection:bg-neutral-300 selection:text-neutral-900'>
        <nav className='flex h-8 w-full flex-row flex-nowrap items-center gap-4 border-b border-b-zinc-800 px-4 font-normal'>
          <Link
            href='/'
            className='flex flex-row items-center gap-1 hover:text-teal-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-600 active:outline active:outline-1 active:outline-teal-600'
          >
            <svg width='24' height='24' viewBox='0 0 420 420' aria-hidden='true' focusable='false'>
              <g fill='#fafafa'>
                <circle cx='86' cy='316.85907' r='16' />
                <circle cx='294' cy='190.85909' r='64' />
                <circle cx='86' cy='60.859077' r='16' />
                <circle cx='166' cy='252.85905' r='32' />
                <circle cx='166' cy='124.85909' r='32' />
              </g>
            </svg>
            Cyberia
          </Link>
          <Link
            href='/'
            className='hover:text-teal-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-600 active:outline active:outline-1 active:outline-teal-600'
          >
            Events
          </Link>
          <Link
            href='/info'
            className='hover:text-teal-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-600 active:outline active:outline-1 active:outline-teal-600'
          >
            Info
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
