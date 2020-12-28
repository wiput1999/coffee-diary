import React from 'react'

import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Meta />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
