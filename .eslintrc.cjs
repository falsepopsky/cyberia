module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'promise'],
  extends: ['cyberia'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: ['./tsconfig.json', './apps/*/tsconfig.json'],
  },
  ignorePatterns: [
    'packages/eslint-config-cyberia',
    'packages/db',
    '**/node_modules/*',
    '**/dist/*',
    '**/.next/*',
    '**/*.config.js',
    '**/*.config.ts',
  ],
};
