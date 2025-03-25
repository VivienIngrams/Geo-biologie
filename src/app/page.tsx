import Image from 'next/legacy/image'
import Link from 'next/link'

import { getClient } from '~/sanity/lib/sanity.client'
import { urlForImage } from '~/sanity/lib/sanity.image';
import { getHomePage } from '~/sanity/lib/sanity.queries'

export default async function HomePage() {
  const client = getClient()

  // const homePageData = await getHomePage(client, {
  //   next: {
  //     revalidate: 600,
  //     cache: 'no-store',
  //   },
  // })

  return (
    <>Homepage
    </>
  )
}