exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    target: "node",
    externals: { canvas: "commonjs canvas" },
  })
}
