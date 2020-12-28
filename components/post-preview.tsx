import Link from 'next/link'

import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import { Attachment, PostType } from '../types/post'

type Props = {
  title: string
  coverImage: Attachment[]
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  Title,
  Attachments: coverImage,
  CreatedAt: date,
  slug,
}: PostType) => {
  return (
    <div>
      {coverImage &&
        <div className="mb-5">
          <CoverImage slug={slug} title={Title} src={coverImage[0].url} />
        </div>
      }
      <h3 className="text-2xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{Title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <Avatar/>
    </div>
  )
}

export default PostPreview
