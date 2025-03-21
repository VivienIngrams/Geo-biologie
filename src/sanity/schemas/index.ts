import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import home from './homePage'


export const schemaTypes = [ blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, home ],
}
