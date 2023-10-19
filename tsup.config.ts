// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  ...options,

  cjsInterop: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/supportedLanguages.ts', 'src/types.ts'],
  format: ['esm', 'cjs'],
  minify: false,
  shims: true,
  silent: !options.watch,
  sourcemap: true,
  splitting: true,
}));
