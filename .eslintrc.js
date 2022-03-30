module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // 'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  ignorePatterns: ['node_modules', 'dist', 'scss', 'logger'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__mode'] }],
    'no-param-reassign': ['error', { props: false }],
    'max-len': ['error', { code: 200 }],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'vue/multi-word-component-names': ['off'],
    'func-names': ['error', 'as-needed'],
    'global-require': ['off'],
    'linebreak-style': ['off'],
  },
};
