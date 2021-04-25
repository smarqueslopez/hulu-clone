import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  const srcImage =
    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${BASE_URL}${result.poster_path}`
  const title = result.title || result.original_name
  const mediaType = result.media_type
  const date = result.release_date || result.first_air_date
  const voteCount = result.vote_count

  return (
    <div
      ref={ref}
      className='p-2 group cursor-pointer transition duraction-20 ease-in transform sm:hover:scale-105 hover:z-50'
    >
      <Image
        layout='responsive'
        src={srcImage}
        alt={title}
        height={1080}
        width={1920}
      />
      <div className='p-2'>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {title}
        </h2>
        <p className='truncate max-w-md'>{result.overview}</p>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {mediaType && `${mediaType} ·`}
          {`${date} · `}
          <ThumbUpIcon className='h-5 mx-2' /> {voteCount}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
