if (!process.env.FLASCHEN_TASCHEN_HOST) {
  throw new Error('FT host parameter not defined.');
} else if (!process.env.LASTFM_USER || !process.env.LASTFM_APIKEY) {
  throw new Error('Missing LastFM credentials.');
}

const lastFmNowPlayingUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USER}&api_key=${process.env.LASTFM_APIKEY}&format=json&limit=1`;

// The port that this server will operate on.
const port =
  process.env.CLIENT_PORT && !isNaN(parseInt(process.env.CLIENT_PORT))
    ? parseInt(process.env.CLIENT_PORT)
    : 8080;

// Output debug messages. Default is false.
const debug = process.env.CLIENT_DEBUG ? process.env.CLIENT_DEBUG === 'true' : false;

// Host of the machine running Flaschen Taschen Server
const ft_host = process.env.FLASCHEN_TASCHEN_HOST;

// Port of the machine running Flaschen Taschen Server - default 1337
const ft_port =
  process.env.FLASCHEN_TASCHEN_PORT && !isNaN(parseInt(process.env.FLASCHEN_TASCHEN_PORT))
    ? parseInt(process.env.FLASCHEN_TASCHEN_PORT)
    : 1337;

// Flaschen Taschen Server image width - default 32
const ft_width =
  process.env.FLASCHEN_TASCHEN_WIDTH && !isNaN(parseInt(process.env.FLASCHEN_TASCHEN_WIDTH))
    ? parseInt(process.env.FLASCHEN_TASCHEN_WIDTH)
    : 32;

// Flaschen Taschen Server image height - default 32
const ft_height =
  process.env.FLASCHEN_TASCHEN_HEIGHT && !isNaN(parseInt(process.env.FLASCHEN_TASCHEN_HEIGHT))
    ? parseInt(process.env.FLASCHEN_TASCHEN_HEIGHT)
    : 32;

// Polling frequency - how often the subsonic server should poll for the now-playing endpoint updates.
// Default 10 seconds
const poll_frequency =
  process.env.POLLING_FREQUENCY_SECS && !isNaN(parseInt(process.env.POLLING_FREQUENCY_SECS))
    ? parseInt(process.env.POLLING_FREQUENCY_SECS) * 1000
    : 10000;

// The dimension of the album art to fetch from Subsonic. Grabbing a higher resolution
// than that supported by the FT display can result in a sharper image display,
// due to Subsonic's own image resizer delivering an overly-blurry result. Default is 256px.
const subsonic_fetch_dimension =
  process.env.SUBSONIC_IMAGE_FETCH_DIMENSION_PX &&
  !isNaN(parseInt(process.env.SUBSONIC_IMAGE_FETCH_DIMENSION_PX))
    ? parseInt(process.env.SUBSONIC_IMAGE_FETCH_DIMENSION_PX)
    : 256;

const config = {
  port,
  debug,
  ft_host,
  ft_port,
  ft_width,
  ft_height,
  poll_frequency,
  subsonic_fetch_dimension,
  lastFmNowPlayingUrl,
};

export default config;
