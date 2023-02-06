import {SchemaTypeDefinition} from 'sanity'

export const reviews: SchemaTypeDefinition = {
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'review',
      title: 'Review',
      type: 'string',
    },
  ],
}
