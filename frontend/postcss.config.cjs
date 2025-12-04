// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Use @tailwindcss/postcss, not 'tailwindcss'
    require('autoprefixer'),
  ],
};
