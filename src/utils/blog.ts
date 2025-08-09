import { SITE_NAME } from './constants'

const listJoiner = new Intl.ListFormat('en-US', {
  style: 'long',
  type: 'conjunction',
})

export function formatAuthors(authors: Array<string>) {
  if (!authors.length) {
    return SITE_NAME
  }

  return listJoiner.format(authors)
}
