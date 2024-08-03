import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT,
  GITHUB_API_URL: process.env.GITHUB_API_URL,
  RICKMORTY_API_URL: process.env.RICKMORTY_API_URL,
  FRANKFURTER_API_URL: process.env.FRANKFURTER_API_URL,
  POKEAPI_URL: process.env.POKEAPI_URL,
  COCKTAILDB_API_URL: process.env.COCKTAILDB_API_URL,
  FAKESTORE_API_URL: process.env.FAKESTORE_API_URL,
  UNSPLASH_API_URL: process.env.UNSPLASH_API_URL,
  QUOTES_API_URL: process.env.QUOTES_API_URL,
  RANDOMUSER_API_URL: process.env.RANDOMUSER_API_URL,
  MOVIEDB_API_URL: process.env.MOVIEDB_API_URL,
  NASA_API_URL: process.env.NASA_API_URL,
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
  MOVIEDB_API_KEY: process.env.MOVIEDB_API_KEY,
  NASA_API_KEY: process.env.NASA_API_KEY,
  QUOTES_API_KEY: process.env.QUOTES_API_KEY
};

export default config;
