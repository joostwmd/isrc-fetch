export interface Artwork {
  // Define the properties of Artwork here
  [key: string]: any
}

export interface EditorialNotes {
  // Define the properties of EditorialNotes here
  [key: string]: any
}

export interface PlayParameters {
  // Define the properties of PlayParameters here
  [key: string]: any
}

export interface Preview {
  // Define the properties of Preview here
  [key: string]: any
}

export interface SongsAttributes {
  albumName: string
  artistName: string
  artistUrl?: string
  artwork: Artwork
  attribution?: string
  audioVariants?: string[]
  composerName?: string
  contentRating?: "clean" | "explicit"
  discNumber?: number
  durationInMillis: number
  editorialNotes?: EditorialNotes
  genreNames: string[]
  hasLyrics: boolean
  isAppleDigitalMaster: boolean
  isrc?: string
  movementCount?: number
  movementName?: string
  movementNumber?: number
  name: string
  playParams?: PlayParameters
  previews: Preview[]
  releaseDate?: string
  trackNumber?: number
  url: string
  workName?: string
}

export interface SongsRelationships {
  albums?: object
  artists?: object
  composers?: object
  genres?: object
  library?: object
  musicVideos?: object
  station?: object
}

export interface AppleTrack {
  id: string
  type: "songs"
  href: string
  attributes: SongsAttributes
  relationships?: SongsRelationships
}

export interface AppleSearchTracksResponse {
  data: Song[]
}
