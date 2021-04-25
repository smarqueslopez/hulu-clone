import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='home' Icon={HomeIcon} />
        <HeaderItem title='trending' Icon={LightningBoltIcon} />
        <HeaderItem title='verified' Icon={BadgeCheckIcon} />
        <HeaderItem title='collections' Icon={CollectionIcon} />
        <HeaderItem title='search' Icon={SearchIcon} />
        <HeaderItem title='account' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain'
        src='/hulu-white.png'
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
