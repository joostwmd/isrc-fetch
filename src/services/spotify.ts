import type {
  ErrorResponse,
  FetchTracksInput,
  TrackInput,
} from "../types/index.js"
import type {
  SpotifySearchTrackResponse,
  SpotifyTrack,
} from "../types/spotify.js"

export async function fetchSpotifyTracks(
  input: FetchTracksInput
): Promise<SpotifyTrack[]> {
  const tracks = await Promise.all(
    input.tracks.map((track) => {
      return fetchSpotifyTrack(track, input.market, input.token)
    })
  )

  //error handeling not correct
  //@ts-ignore
  return tracks
}

export async function fetchSpotifyTrack(
  track: TrackInput,
  market: string,
  token: string
): Promise<SpotifyTrack | ErrorResponse> {
  const response: Response = await fetch(
    `https://api.spotify.com/v1/search?q=isrc:${track.isrc}&type=track&market=${market}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    const error: ErrorResponse = {
      statusCode: response.status,
      message: response.statusText,
    }
    console.log("error", error)
    return error
  }

  const data: SpotifySearchTrackResponse = await response.json()

  if (!data.tracks.items[0]) {
    const error: ErrorResponse = {
      statusCode: 404,
      message: "No Tracks Found",
    }
    console.log("error", error)
    return error
  }

  return data.tracks.items[0]
}
