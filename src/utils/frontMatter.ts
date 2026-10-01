import * as graymatter from 'gray-matter'

export function extractFrontMatter(content: string) {
  const result = graymatter.default(content, {
    excerpt: (file: any) => (file.excerpt = createRichExcerpt(file.content)),
  })

  return {
    ...result,
    data: {
      ...result.data,
      description: createExcerpt(result.content),
    } as { [key: string]: any } & { description: string },
  }
}

function createExcerpt(text: string, maxLength = 200) {
  // Remove Markdown formatting using a basic regex

  let cleanText = text
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .replace(/[`*_~>]/g, '') // Remove Markdown special characters
    .replace(/#+\s/g, '') // Remove headers
    .replace(/-\s/g, '') // Remove list markers
    .replace(/\r?\n|\r/g, ' ') // Convert line breaks to spaces
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim()

  // Truncate the text to the desired length, preserving whole words
  if (cleanText.length > maxLength) {
    cleanText = cleanText.slice(0, maxLength).trim() + '...'
  }

  return cleanText
}

function createRichExcerpt(text: string, maxLength = 200) {
  let cleanText = createExcerpt(text, maxLength)

  const imageText = extractFirstImage(text)

  if (imageText) {
    cleanText = `${imageText}<div style="height:1rem;"></div>${cleanText}`
  }

  return cleanText
}

function extractFirstImage(markdown: string) {
  // Regex to match Markdown image syntax: ![alt text](url)
  const imageRegex = /!\[(.*?)\]\((.*?)\)/
  const match = markdown.match(imageRegex)
  return match?.[0]
}

