import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: `${packageJson.main}.js`,
      format: "cjs",
      sourcemap: true,
    },
    { file: `${packageJson.main}.min.js`, format: "cjs", plugins: [terser()] },
    {
      file: `${packageJson.module}.js`,
      format: "esm",
      sourcemap: true,
    },
    { file: `${packageJson.module}.min.js`, format: "esm", plugins: [terser()] },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss(),
  ],
};
