import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import fileSize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import entryComponents from './build-entry.json';

import typescript from 'rollup-plugin-typescript2';
const tailwindcss = require('tailwindcss');
const packageJson = require('./package.json');

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({tsconfig: './tsconfig.json'}),
  postcss({
    minimize: true,
    writeDefinitions: true,
    plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer'), require('cssnano')({preset: 'default'})],
  }),
  terser(),
  fileSize(),
];

const external = ['react', 'react-dom'];

const configurations = [
  // Build for esm and cjs
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins,
  },
  // Types declaration for esm
  {
    input: 'dist/esm/components/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    plugins: [dts()],
    external,
  },
  // For single import components
  {
    input: entryComponents,
    output: [
      {
        dir: './dist',
        format: 'es',
      },
    ],
    plugins,
    external,
  },
  // Types Declaration For single import components
  {
    input: entryComponents,
    output: [
      {
        dir: './dist',
        format: 'es',
      },
    ],
    plugins: [dts()],
    external,
  },
];

export default configurations;
