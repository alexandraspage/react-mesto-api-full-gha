module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        "ecmaVersion": "latest"
    },
    plugins: [
        "react"
    ],
    rules: {
            'no-underscore-dangle':
            ['error', { allow: ['_id', '_message'] }],
            'max-classes-per-file': ['error', { ignoreExpressions: false, max: 10 }],
    }
}
