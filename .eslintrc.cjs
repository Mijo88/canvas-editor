module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/*.js'],
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_$',
      varsIgnorePattern: '^_$',
    }],
    'import/extensions': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
};
