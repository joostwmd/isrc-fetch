import type { ErrorResponse, FetchTracksInput } from "../types/index.js"
import type { AppleTrack, AppleSearchTracksResponse } from "../types/apple.js"

export async function fetchAppleMusicTracks(
  input: FetchTracksInput
): Promise<AppleTrack[] | ErrorResponse> {
  const isrcs = input.tracks.map((track) => track.isrc).join(",")
  console.log("isrcs", isrcs)

  console.log("token", input.token)

  const response: Response = await fetch(
    `https://api.music.apple.com/v1/catalog/${input.market}/songs?filter[isrc]=${isrcs}`,
    {
      headers: {
        Authorization: `Bearer ${input.token}`,
      },
    }
  )

  console.log("response", response)

  if (!response.ok) {
    const error: ErrorResponse = {
      statusCode: response.status,
      message: response.statusText,
    }
    return error
  }

  const data: AppleSearchTracksResponse = await response.json()
  console.log("data", data)
  if (!data.data || data.data.length === 0) {
    const error: ErrorResponse = {
      statusCode: 404,
      message: "No Tracks Found",
    }
    return error
  }

  return data.data
}
