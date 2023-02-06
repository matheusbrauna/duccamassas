import { UseNextSanityImageProps } from 'next-sanity-image'

import { Benefits } from 'components/Benefits/Benefits'
import { Header } from 'components/Header/Header'
import { ImageText } from 'components/ImageText/ImageText'

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

export interface IAbout {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  button: string
  image: UseNextSanityImageProps
  text: string
  title: string
  top_title: string
  url: string
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

async function getAbout() {
  const about = await sanityClient.fetch<IAbout>(`*[_type == "about"][0]`)

  return { about }
}

export default async function Home() {
  const { header } = await getHeader()
  const { benefits } = await getBenefits()
  const { about } = await getAbout()

  return (
    <>
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
        <ImageText data={about} />
      </main>
    </>
  )
}
