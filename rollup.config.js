const path = require('path')

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from '@rollup/plugin-alias';
import url from '@rollup/plugin-url';

import dts from "rollup-plugin-dts";
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            url(),
            typescript({ tsconfig: "./tsconfig.json", sourceMap: true, inlineSources: true }),
            terser(),
            sourcemaps(),
            alias({
                entries: [
                    { find: '@ui', replacement: path.resolve(__dirname, "src/ui") },
                    { find: '@components', replacement: path.resolve(__dirname, "src/components") }
                ]
            }),
        ],
        external: ["react", "react-dom", "styled-components"]
    },
    {
        input: "dist/esm/types/src/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];