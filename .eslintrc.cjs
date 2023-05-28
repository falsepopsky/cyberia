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
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
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
