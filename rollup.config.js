import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';
const input = './src/public-api.js';
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

export default [
    // CommonJS
    {
        input,
        output: {
            file: packageJSON.main,
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
            }),
            typescript(),
            nodeResolve(),
            commonjs(),
        ],
        external: [/@babel\/runtime/],
    },
    // Minified CommonJS
    {
        input,
        output: {
            file: minifyExtension(packageJSON.main),
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
            }),
            typescript(),
            nodeResolve(),
            commonjs(),
            uglify(),
        ],
        external: [/@babel\/runtime/],
    },

    // UMD
    {
        input,
        output: {
            file: minifyExtension(packageJSON.browser),
            format: 'umd',
            name: 'arcaneMagic',
            globals: {
                react: 'React',
                '@emotion/styled': 'styled',
                '@emotion/core': 'core',
            },
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
            }),
            typescript(),
            nodeResolve(),
            commonjs(),
        ],
        external: [/@babel\/runtime/],
    },
    // Minified UMD
    {
        input,
        output: {
            file: packageJSON.browser,
            format: 'umd',
            name: 'arcaneMagic',
            globals: {
                react: 'React',
                '@emotion/styled': 'styled',
                '@emotion/core': 'core',
            },
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
            }),
            typescript(),
            nodeResolve(),
            commonjs(),
            terser(),
        ],
        external: [/@babel\/runtime/],
    },

    // ES
    {
        input,
        output: {
            file: packageJSON.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
            }),
            typescript(),
            nodeResolve(),
            commonjs(),
        ],
        external: [/@babel\/runtime/],
    },
    // Minified ES
    {
        input,
        output: {
            file: minifyExtension(packageJSON.module),
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
            }),
            typescript(),
            nodeResolve(),
            commonjs(),
            terser(),
        ],
        external: [/@babel\/runtime/],
    },
];
