module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18next',
        '@typescript-eslint',
        'react-hooks',
    ],
    rules: {
        indent: [2, 4],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': [
            'warn',
            {
                devDependencies: [
                    '**/*.stories.*',
                    '**/.storybook/**/*.*',
                    'test.{ts,tsx}', // repos with a single test file
                    'test-*.{ts,tsx}', // repos with multiple top-level test files
                    '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
                    '**/jest.config.ts', // jest config
                    '**/jest.setup.ts', // jest setup
                ],
                peerDependencies: true,
            },
        ],
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120,
                ignorePattern: 'd="([\\s\\S]*?)"',
            },
        ],
        'no-restricted-globals': 'warn',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error', // Check rules of hooks
        'react-hooks/exhaustive-deps': 'error', // Check effect dependencies
        'no-param-reassign': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
