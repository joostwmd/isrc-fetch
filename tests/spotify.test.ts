import { describe, it, expect } from "vitest";
import { fetchSpotifyTracks } from "../src/services/spotify";
import { VALID_ISCR_INPUT, INVALID_ISCR_INPUT } from "./input-data";
import dotenv from "dotenv";

dotenv.config();

describe("Spotify Service", () => {
  it("should fetch tracks correctly", async () => {
    const token = process.env.SPOTIFY_TOKEN;
    if (!token) {
      throw new Error(
        "SPOTIFY_API_TOKEN is missing in the environment variables",
      );
    }

    const input = {
      token,
      ...VALID_ISCR_INPUT,
    };

    const tracks = await fetchSpotifyTracks(input);
    expect(tracks).toBeDefined();
    expect(tracks.length).toBeGreaterThan(0);
  });

  it("should return empty array for invalid ISRC", async () => {
    const token = process.env.SPOTIFY_TOKEN;
    if (!token) {
      throw new Error(
        "SPOTIFY_API_TOKEN is missing in the environment variables",
      );
    }

    const input = {
      token,
      ...INVALID_ISCR_INPUT,
    };

    const tracks = await fetchSpotifyTracks(input);
    expect(tracks).toBeDefined();
    expect(tracks.length).toBe(0);
  });
});
