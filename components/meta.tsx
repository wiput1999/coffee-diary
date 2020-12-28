import React from 'react'
import Head from 'next/head'

import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = (): React.ReactElement => {
  return (
    <Head>
      <link href="/favicon.png" rel="shortcut icon" />
      <link href="/favicon.png" rel="apple-touch-icon-precomposed" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={`${CMS_NAME}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
