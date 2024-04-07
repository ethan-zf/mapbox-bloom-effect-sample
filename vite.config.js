import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  let config = {};
  if (mode === 'dev') {
    config = {
      base: './',
      define: {
        'process.env': {
          NODE_ENV: mode,
        },
      },
      server: {
        port: 3001,
        open: true,
      },
    };
  } else if (mode === 'prod') {
    config = {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'index.js'),
          name: 'mapboxBloomEffect',
          fileName: 'mapbox-bloom-effect-sample',
        },
      },
    };
  }
  return config;
});