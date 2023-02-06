import { UseNextSanityImageProps } from 'next-sanity-image'

import { Benefits } from 'components/Benefits/Benefits'
import { Cardapio } from 'components/Cardapio/Cardapio'
import { Header } from 'components/Header/Header'
import { ImageText } from 'components/ImageText/ImageText'
import { Reviews } from 'components/Reviews/Reviews'

import { sanityClient } from 'lib/sanity'

export interface IHeader {
  _id: string
  subtitle: string
  title: string
  image: UseNextSanityImageProps
}

export interface IBenefit {
  _id: string
  subtitle: string
  title: string
  icon: UseNextSanityImageProps
}

export interface IAbout {
  _id: string
  button: string
  image: UseNextSanityImageProps
  text: string
  title: string
  top_title: string
  url: string
}

export interface ICardapio {
  _id: string
  button: string
  image: UseNextSanityImageProps
  category: string
  title: string
}

export interface IReview {
  _id: string
  image: UseNextSanityImageProps
  name: string
  review: string
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

async function getCardapio() {
  const cardapio = await sanityClient.fetch<ICardapio[]>(
    `*[_type == "cardapio"][0..3]`
  )

  return { cardapio }
}

async function getReviews() {
  const reviews = await sanityClient.fetch<IReview[]>(
    `*[_type == "reviews"][0..2]`
  )

  return { reviews }
}

export default async function Home() {
  const { header } = await getHeader()
  const { benefits } = await getBenefits()
  const { about } = await getAbout()
  const { cardapio } = await getCardapio()
  const { reviews } = await getReviews()

  return (
    <>
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
        <ImageText data={about} />
        <Cardapio cardapio={cardapio} />
        <Reviews reviews={reviews} />
      </main>
    </>
  )
}
