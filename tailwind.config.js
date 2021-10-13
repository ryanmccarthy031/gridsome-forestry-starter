module.exports = {
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'content/pages/**/*.vue',
    'plugins/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography') ],
}
