import './globals.css'
import { DM_Sans } from 'next/font/google'
import Navbar from '@components/Navbar';

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'STAR Plus',
  description: 'STAR Plus - 2D Games Studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'></link>
      </head>
      <body className={`${dm_sans.className} flex justify-center`}>
        <div className='lg:w-[75%] flex flex-col gap-6'>

          <Navbar/>
          {children}

        </div>
      </body>
    </html>
  )
}
