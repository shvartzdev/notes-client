module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "react/button-has-type": "off",
        "react/jsx-first-prop-new-line": "off",
        "jsx-a11y/no-static-element-interactions":"off",
        "jsx-a11y/click-events-have-key-events":"off",
        "react/jsx-one-expression-per-line": "off",
    }
};
