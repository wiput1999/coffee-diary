import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import { Attachment } from '../types/post'

type Props = {
  title: string
  coverImage: Attachment[]
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar />
      </div>
      {coverImage &&
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage[0].url} hero={true} />
        </div>
      }
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
