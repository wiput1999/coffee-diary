import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  hero?: boolean
  slug?: string
}

const CoverImage = ({ title, src, slug, hero = false }: Props) => {
  const image = (
    <Image
      layout='fill'
      src={src}
      alt={`Cover Image for ${title}`}
      className={'shadow-small hover:shadow-medium transition-shadow duration-200'}
      objectFit='cover'
    />
  )
  return (
    <div className={`sm:mx-0 h-64 ${hero && 'lg:h-128'} w-full relative`}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
