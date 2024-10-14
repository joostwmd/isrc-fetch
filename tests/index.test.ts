import { describe, it, expect } from "vitest"
import { fetchTracks } from "../src/index"
import { VALID_ISCR_INPUT } from "./input-data"
import dotenv from "dotenv"

dotenv.config()

describe("Index Service", () => {
  it("should handle Apple Music service correctly", async () => {
    const token = process.env.APPLE_MUSIC_DEVELOPER_TOKEN
    if (!token) {
      throw new Error(
        "APPLE_MUSIC_DEVELOPER_TOKEN is missing in the environment variables"
      )
    }

    const input = {
      token,
      ...VALID_ISCR_INPUT,
    }

    const tracks = await fetchTracks(input, "apple")
    expect(tracks).toBeDefined()
    expect(tracks.length).toBeGreaterThan(0)
  })

  it("should handle Spotify service correctly", async () => {
    const token = process.env.SPOTIFY_TOKEN
    if (!token) {
      throw new Error(
        "SPOTIFY_API_TOKEN is missing in the environment variables"
      )
    }

    const input = {
      token,
      ...VALID_ISCR_INPUT,
    }
    const tracks = await fetchTracks(input, "spotify")
    expect(tracks).toBeDefined()
    expect(tracks.length).toBeGreaterThan(0)
  })
})
