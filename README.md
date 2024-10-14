# ISRC-fetch

Welcome to ISRC Fetch 🎶

This package allows you to fetch songs on any music streaming service using one simple function. Under the hood this package searches the catalouge of streaming services in the most optimal way and returns tracks with a mathcing ISRC.

## Features

- Dynamic TypeScript Support 🛂
- Apple Music
- Spoitfy

## Installation

Install isrc-fetch with npm

```bash
  npm install isrc-fetch
```

## Import

The package is exported as both CommonJS (CJS) and ES5 modules.

### CommonJS

```javascript
const { fetchTracks } = require("isrc-fetch")
```

### ES5 Modules

```javascript
import { fetchTracks } from "isrc-fetch"
```

## Usage

To use this package you just have to invoke the imported function with the correct input. You need to specify the streaming service you want to fetch tracks from and supply a valid user token for that streaming service, a user market and an array of the tracks you want to fetch.

```javascript
import { fetchTracks } from 'isrc-fetch';

const input = {
    token : 'valid token',
    market : 'as ISO 3166-1 country code'
    tracks : [
        {
            artistName : 'artistName',
            trackName : 'trackName,
            isrc : 'ISRC'
        }
    ]
}


const tracks = await fetchTracks(input)


```

## Contributing

Are you missing a streaming service? Contributions are always welcome!

- Implement the logic in `/services/new-service`
- Import the main function into `/utils` and implement the funciton into the `if .. else` block
- Add typescript support for the retruned track objects. At least two levels deep.
- Add a integration test with that streaming service
- Run `npm run ci`
- Make a pull request when passing it

## Roadmap

- Amazon Music
- Tidal
