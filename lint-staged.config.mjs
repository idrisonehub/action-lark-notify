// lint-staged.config.mjs
export default {
  "*": "biome check --write --no-errors-on-unmatched --files-ignore-unknown=true",
};
