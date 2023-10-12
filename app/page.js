import Image from 'next/image'
import SloganSec from '@components/SloganSec';
import AboutUs from '@/components/AboutUsSection';
import GamesContainer from '@/components/GamesContainer';


export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <SloganSec/>
      <AboutUs/>
      <GamesContainer/>
    </div>
  )
}
