import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import PostType from '../types/post'

type Props = {
  allPosts: PostType[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.Title}
              coverImage={'https://dl.airtable.com/.attachmentThumbnails/7411e1b43bccb06d0e403950083667e8/406731bd'}
              date={heroPost.CreatedAt}
              slug={heroPost.slug}
              excerpt={''}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: { allPosts },
  }
}
