import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { Attachment } from '../types/post'

type Props = {
  title: string
  coverImage: Attachment[]
  date: string
  excerpt: string
  author?: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      {coverImage &&
        <div className="mb-8">
          <CoverImage title={title} src={coverImage[0].url} slug={slug} hero={true} />
        </div>
      }
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-8 md:mb-16">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  )
}

export default HeroPost
