import React from 'react'

import { CMS_NAME } from '../lib/constants'

const Intro = (): React.ReactElement => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        {CMS_NAME}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Just a coffee diary
      </h4>
    </section>
  )
}

export default Intro
