import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["worker/index.ts"],
  bundle: true,
  outfile: "dist/worker/index.mjs",
  format: "esm",
  target: "es2022",
  platform: "node",
  external: ["*.node", "cloudflare:*"],
  logLevel: "info",
});
