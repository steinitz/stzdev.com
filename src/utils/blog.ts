const listJoiner = new Intl.ListFormat('en-US', {
  style: 'long',
  type: 'conjunction',
})

export function formatAuthors(authors: Array<string>) {
  if (!authors.length) {
    return 'STZ Dev'
  }

  return listJoiner.format(authors)
}
