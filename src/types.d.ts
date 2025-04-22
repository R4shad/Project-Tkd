export interface ClubInfo {
  id: number
  clubName: string
  foundationDate: string
  headInstructorName: string
  description: string
  logoUrl: string
  facebookLink: string
  whatsappContact: string
  images: string[]
  googleMapsLocation: [number, number]
  instructorHistory: string
}

export interface NewsItem {
  id: number
  title: string
  content: string
  imageUrl?: string
}
