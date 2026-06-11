import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            /**
             * React and third-party.
             */
            ['^react$', '^\\w'],
            /**
             * Other packages.
             */
            ['^@?\\w'],
            /**
             * Internal path aliases (FSD layers).
             */
            ['^@/app'],
            ['^@/pages'],
            ['^@/widgets'],
            ['^@/features'],
            ['^@/entities'],
            ['^@/shared'],
            /**
             * Local relative imports.
             */
            ['^\\.'],
            /**
             * Styles.
             */
            ['\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
    },
  },
]);
