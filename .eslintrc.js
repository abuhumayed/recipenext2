module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier' // Integrate Prettier with ESLint
  ],
  plugins: ['prettier'], // Enable the Prettier plugin
  rules: {
    'prettier/prettier': 'error' // Show Prettier issues as ESLint errors
  }
};