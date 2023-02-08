import { Benefits, IBenefit } from 'components/Benefits/Benefits'
import { Cardapio, ICardapio } from 'components/Cardapio/Cardapio'
import { Footer, IFooter } from 'components/Footer/Footer'
import { Header, IHeader } from 'components/Header/Header'
import { IImageText, ImageText } from 'components/ImageText/ImageText'
import { IMenu, Menu } from 'components/Menu/Menu'
import { IReview, Reviews } from 'components/Reviews/Reviews'

import { sanityClient } from 'lib/sanity'

async function fetchData() {
  const data = await Promise.all([
    sanityClient.fetch<IHeader>(`*[_type == "header"][0]`),
    sanityClient.fetch<IBenefit[]>(`*[_type == "benefits"][0..2]`),
    sanityClient.fetch<IImageText>(`*[_type == "about"][0]`),
    sanityClient.fetch<ICardapio[]>(`*[_type == "cardapio"][0..3]`),
    sanityClient.fetch<IReview[]>(`*[_type == "reviews"][0..2]`),
    sanityClient.fetch<IImageText>(`*[_type == "location"][0]`),
    sanityClient.fetch<IMenu[]>(`*[_type == "menu"][0..19]`),
    sanityClient.fetch<IFooter>(`*[_type == "footer"][0]`),
  ])

  return data
}

export default async function Home() {
  const [header, benefits, about, cardapio, reviews, location, menu, footer] =
    await fetchData()

  return (
    <>
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
        <ImageText data={about} />
        <Cardapio cardapio={cardapio} />
        <Reviews reviews={reviews} />
        <ImageText data={location} />
        <Menu menu={menu} />
        <Footer footer={footer} />
      </main>
    </>
  )
}
