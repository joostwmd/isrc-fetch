import { fetchSpotifyTracks } from "./services/spotify.js"
import type { SpotifyTrack } from "./types/spotify.js"
import type { Platform, FetchTracksInput } from "./types/index.js"

export async function fetchTracks(
  input: FetchTracksInput,
  platform: Platform
): Promise<SpotifyTrack[]> {
  if (platform === "spotify") {
    return fetchSpotifyTracks(input)
  }
  throw new Error("Unsupported platform")
}
