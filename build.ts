import * as esbuild from "esbuild";

const mode = process.env.NODE_ENV?.toLowerCase() ?? "development";

console.log(`[Worker] Running esbuild in ${mode} mode`);

esbuild.build({
  entryPoints: ["./worker/index.ts"],
  bundle: true,
  minify: mode === "production",
  format: "esm",
  define: {
    "process.env.NODE_ENV": `"${mode}"`,
    "process.env.DATABASE_URL": `DATABASE_URL`,
  },
  outfile: "worker.js",
  plugins: [
    {
      name: "prisma-plugin",
      setup(build) {
        build.onResolve({ filter: /^@prisma\/client$/ }, () => {
          return {
            path: require.resolve("@prisma/client"),
          };
        });
      },
    },
  ],
});
