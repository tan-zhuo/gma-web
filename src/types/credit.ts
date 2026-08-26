export interface ImageCredit {
  file: string
  title: string
  page: string
  artist: string
  license: string
  /** how the source image is framed: light studio bg / dark bg / transparent / real-world photo */
  bg: 'light' | 'dark' | 'alpha' | 'photo'
}
