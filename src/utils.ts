import { fetchSpotifyTracks } from "./services/spotify.js";
import { fetchAppleMusicTracks } from "./services/apple.js";
import type { FetchTracksInput, PlatformTrackMap } from "./types/index.js";

export async function fetchTracks<T extends keyof PlatformTrackMap>(
  input: FetchTracksInput,
  platform: T,
): Promise<PlatformTrackMap[T][]> {
  if (platform === "spotify") {
    return fetchSpotifyTracks(input) as Promise<PlatformTrackMap[T][]>;
  } else if (platform === "apple") {
    return fetchAppleMusicTracks(input) as Promise<PlatformTrackMap[T][]>;
  }
  throw new Error("Unsupported platform");
}
