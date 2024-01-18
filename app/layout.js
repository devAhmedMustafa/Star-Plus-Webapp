import './globals.css'
import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/Containers/Navbar';
import { GlobalContextProvider } from './Context/store';

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Star Plus Games',
  description: 'STAR Plus - Games Studio',
  icons:{
    icon: {
      url: '/STAR.png',
      type: 'image/png'
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'></link>
      </head>
      <body className={`${dm_sans.className}`}>
        <GlobalContextProvider>
          <div className='xl:w-[85%] 2xl:w-[75%] w-full m-auto flex flex-col gap-6 px-8 lg:p-0'>
            <Navbar/>
            {children}
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  )
}
