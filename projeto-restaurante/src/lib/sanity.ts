import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'u28vsgx0',
  dataset: 'production',
  apiVersion: '2023-02-03',
  useCdn: false,
})
