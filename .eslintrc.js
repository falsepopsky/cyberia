module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'turbo',
    'prettier',
  ],
  parserOptions: {
    tsconfigRootDir: './',
    ecmaVersion: 'latest',
    project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
  },
  reportUnusedDisableDirectives: true,
};
