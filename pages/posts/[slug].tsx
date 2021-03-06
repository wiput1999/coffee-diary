import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { PostType } from '../../types/post'

type Props = {
  post: PostType
  preview?: boolean
}

const Post = ({ post, preview }: Props): React.ReactElement => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.Title} | {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.Title}
                coverImage={post.Attachments}
                date={post.CreatedAt}
              />
              <div className="max-w-2xl mx-auto">
                <p>
                  <b>Store : </b>
                  {post.Store}
                </p>
                <p>
                  <b>Branch : </b>
                  {post.Branch}
                </p>
                <p>
                  <b>Brew Method : </b>
                  {post.Brew}
                </p>
                <PostBody content={post.Content} />
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug)
  const content = await markdownToHtml(post.Content || '')

  return {
    props: {
      post: {
        ...post,
        Content: content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
