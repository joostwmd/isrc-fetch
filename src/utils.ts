import { fetchSpotifyTracks } from "./services/spotify.js"
import { fetchAppleMusicTracks } from "./services/apple.js"
import type { SpotifyTrack } from "./types/spotify.js"
import type { Platform, FetchTracksInput } from "./types/index.js"
import type { AppleTrack } from "./types/apple.js"

export async function fetchTracks(
  input: FetchTracksInput,
  platform: Platform
): Promise<SpotifyTrack[] | AppleTrack[]> {
  if (platform === "spotify") {
    return fetchSpotifyTracks(input)
  } else if (platform === "apple") {
    // @ts-expect-error error handeling not correct
    return fetchAppleMusicTracks(input)
  }
  throw new Error("Unsupported platform")
}
