import 'styles/globals.scss'

import { Rubik } from '@next/font/google'

const rubik = Rubik({
  variable: '--font-rubik',
  display: 'optional',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${rubik.className}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
