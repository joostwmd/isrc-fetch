import type { FetchTracksInput } from "../types/index";
import type { AppleTrack, AppleSearchTracksResponse } from "../types/apple.js";

export async function fetchAppleMusicTracks(
  input: FetchTracksInput,
): Promise<AppleTrack[]> {
  const isrcs = input.tracks.map((track) => track.isrc).join(",");

  const response: Response = await fetch(
    `https://api.music.apple.com/v1/catalog/${input.market}/songs?filter[isrc]=${isrcs}`,
    {
      headers: {
        Authorization: `Bearer ${input.token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Error fetching tracks: ${response.statusText}`);
  }

  const data: AppleSearchTracksResponse = await response.json();

  return data.data;
}
