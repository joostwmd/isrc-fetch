import { describe, it, expect } from "vitest";
import { INVALID_ISCR_INPUT, VALID_ISCR_INPUT } from "./input-data";
import { fetchAppleMusicTracks } from "../src/services/apple";
import dotenv from "dotenv";

dotenv.config();

describe("Apple Music Service", () => {
  it("should fetch tracks correctly", async () => {
    const token = process.env.APPLE_MUSIC_DEVELOPER_TOKEN;
    if (!token) {
      throw new Error(
        "APPLE_MUSIC_DEVELOPER_TOKEN is missing in the environment variables",
      );
    }

    const input = {
      token,
      ...VALID_ISCR_INPUT,
    };

    const tracks = await fetchAppleMusicTracks(input);
    expect(tracks).toBeDefined();
    expect(tracks.length).toBeGreaterThan(0);
  });

  it("should return empty array for invalid ISRC", async () => {
    const token = process.env.APPLE_MUSIC_DEVELOPER_TOKEN;
    if (!token) {
      throw new Error(
        "APPLE_MUSIC_DEVELOPER_TOKEN is missing in the environment variables",
      );
    }

    const input = {
      token,
      ...INVALID_ISCR_INPUT,
    };

    const tracks = await fetchAppleMusicTracks(input);
    expect(tracks).toBeDefined();
    expect(tracks.length).toBe(0);
  });
});
