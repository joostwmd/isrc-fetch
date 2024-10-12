import type { FetchTracksInput, TrackInput } from "../types/index.js";
import type {
  SpotifySearchTrackResponse,
  SpotifyTrack,
} from "../types/spotify.js";

export async function fetchSpotifyTracks(
  input: FetchTracksInput,
): Promise<SpotifyTrack[]> {
  const tracks: SpotifyTrack[] = [];

  for (const track of input.tracks) {
    try {
      const response = await fetchSpotifyTrack(
        track,
        input.market,
        input.token,
      );
      if (response) {
        tracks.push(response);
      }
    } catch (error) {
      console.error(`Error fetching track with ISRC ${track.isrc}:`, error);
    }
  }

  return tracks;
}

export async function fetchSpotifyTrack(
  track: TrackInput,
  market: string,
  token: string,
): Promise<SpotifyTrack | null> {
  const response: Response = await fetch(
    `https://api.spotify.com/v1/search?q=isrc:${track.isrc}&type=track&market=${market}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Error fetching track: ${response.statusText}`);
  }

  const data: SpotifySearchTrackResponse = await response.json();

  if (!data.tracks.items[0] || data.tracks.total === 0) {
    return null;
  }

  return data.tracks.items[0];
}
