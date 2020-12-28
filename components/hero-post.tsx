import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { PostType } from '../types/post'

const HeroPost = ({
  Title,
  Attachments: coverImage,
  CreatedAt: date,
  slug,
}: PostType) => {
  return (
    <section>
      {coverImage &&
        <div className="mb-8">
          <CoverImage title={Title} src={coverImage[0].url} slug={slug} hero={true} />
        </div>
      }
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-8 md:mb-16">
        <div>
          <h3 className="mb-2 text-3xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{Title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
