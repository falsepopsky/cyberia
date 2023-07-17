module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'promise'],
  extends: ['cyberia'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
  },
  ignorePatterns: [
    'packages/eslint-config-cyberia',
    '**/node_modules/*',
    '**/dist/*',
    '**/.next/*',
    '**/.eslintrc.cjs',
    '**/*.config.js',
    '**/*.config.ts',
  ],
};
