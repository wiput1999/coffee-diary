import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props): React.ReactElement => {
  return (
    <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
