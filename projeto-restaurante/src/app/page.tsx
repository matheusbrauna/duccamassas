import { UseNextSanityImageProps } from 'next-sanity-image'

import { Benefits } from 'components/Benefits/Benefits'
import { Header } from 'components/Header/Header'

import { sanityClient } from 'lib/sanity'

export interface IHeader {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  subtitle: string
  title: string
  image: UseNextSanityImageProps
}

export interface IBenefit {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  subtitle: string
  title: string
  icon: UseNextSanityImageProps
}

async function getHeader() {
  const header = await sanityClient.fetch<IHeader>(`*[_type == "header"][0]`)

  return { header }
}

async function getBenefits() {
  const benefits = await sanityClient.fetch<IBenefit[]>(
    `*[_type == "benefits"][0..2]`
  )

  return { benefits }
}

export default async function Home() {
  const { header } = await getHeader()
  const { benefits } = await getBenefits()

  return (
    <>
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
      </main>
    </>
  )
}
