module.exports = ({file, options, env}) => ({
  plugins: {
    'precss': true,
    'autoprefixer': true,
    'cssnano': options.cssnano,  // Status depends on webpack mode
  },
});
