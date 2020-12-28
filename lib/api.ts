import Airtable from 'airtable'

import PostType from '../types/post'

export async function getPostBySlug(slug: string): Promise<PostType> {
  const base = new Airtable().base('appnZu6BZs0yEC1v8');

  const posts = await base('Posts').select({
    filterByFormula: `{slug} = '${slug}'`
  }).all()

  const post = posts[0].fields

  return post
}

export async function getAllPosts(fields: string[] = []): Promise<PostType[]> {
  const base = new Airtable().base('appnZu6BZs0yEC1v8');

  const slugs = await base('Posts').select({
      sort: [{field: "CreatedAt", direction: "desc"}]
  }).all()
  const posts: PostType[] = slugs
    .map(post => post.fields)

  return posts
}
