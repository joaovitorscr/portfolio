export interface IProject {
  name: string
  type: string
  purpose: string
  image: {
    thumbnail: string
  }
  links: {
    github: string
    live: string
  }
  description: string
}