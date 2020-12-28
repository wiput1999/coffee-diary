
 export type Attachment = {
  id: string
  url: string
  filename: string
  size: number
  type: string
  thumbnails: {
    small:{
      url: string
      width: number
      height: number
    },
    large:{
      url: string
      width: number
      height: number
    },
    full:{
      url: string
      width: number
      height: number
    },
  }
}

export type PostType = {
  slug: string,
  Title: string,
  Content: string,
  Store: string,
  Branch: string,
  Brew: string,
  CreatedAt: string
  Attachments: Attachment[]
}
