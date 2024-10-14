export const VALID_ISCR_INPUT = {
  market: "US",
  tracks: [
    {
      artistName: "Ceren",
      trackName: "Dünya",
      isrc: "DEZC62417969",
    },
  ],
}

export const INVALID_ISCR_INPUT = {
  market: "US",
  tracks: [
    {
      artistName: "Unknown Artist",
      trackName: "Unknown Track",
      isrc: "INVALIDISRC123",
    },
    {
      artistName: "Unknown Artist",
      trackName: "Unknown Track",
      isrc: "INVALIDISRC456",
    },
  ],
}
