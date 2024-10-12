export interface TrackInput {
  artistName: string;
  trackName: string;
  isrc: string;
}

export interface FetchTracksInput {
  token: string;
  market: string;
  tracks: TrackInput[];
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
}

export type Platform = "spotify" | "apple";

export type PlatformTrackMap = {
  spotify: SpotifyTrack;
  apple: AppleTrack;
};
