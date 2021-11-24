// {
//     "extends": "@react-native-community",
//         "rules": {
//         "quotes": [2, "double", { "avoidEscape": true }]
//     }
// } 


module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
