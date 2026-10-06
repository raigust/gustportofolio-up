//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
<<<<<<< HEAD
    ignores: ['eslint.config.js', 'prettier.config.js', '.output/**', 'dist/**', '.nitro/**', 'src/routeTree.gen.ts'],
=======
    ignores: ['eslint.config.js', 'prettier.config.js'],
>>>>>>> a3b46a5e338e404a84131df6c3c725feacd87bb7
  },
]
