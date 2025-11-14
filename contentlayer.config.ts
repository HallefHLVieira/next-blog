// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    image: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.md', ''),
    },
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
})