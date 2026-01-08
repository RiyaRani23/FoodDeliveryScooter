module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }]  // Babel Preset => helping to convert jsx into normal html code
  ],
};
