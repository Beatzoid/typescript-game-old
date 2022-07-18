module.exports = {
    root: true,
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    // add your custom rules here
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: false,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
            },
        ],
        "no-unused-vars": "off", // note you must disable the base rule as it can report incorrect errors
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "none",
                ignoreRestSiblings: false,
            },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true,
                },
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
            },
            {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "should", "has", "can", "did", "will"],
            },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
    },
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
    ],
};
