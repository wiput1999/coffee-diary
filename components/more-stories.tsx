import PostPreview from './post-preview'
import {PostType} from '../types/post'

type Props = {
  posts: PostType[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.Title}
            coverImage={post.Attachments}
            date={post.CreatedAt}
            // author={post.author}
            slug={post.slug}
            excerpt={''}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
