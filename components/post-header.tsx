import React from 'react'

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

const PostHeader = ({ title, coverImage, date }: Props): React.ReactElement => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {coverImage && (
        <div className="mb-8 sm:mx-0">
          <CoverImage title={title} src={coverImage[0].url} hero={true} />
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
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
