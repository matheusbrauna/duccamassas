import {SchemaTypeDefinition} from 'sanity'

export const cardapio: SchemaTypeDefinition = {
  name: 'cardapio',
  title: 'Cardápio',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
}
