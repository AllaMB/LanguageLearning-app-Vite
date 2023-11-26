    module.exports = {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
        ["react-css-modules", {
            "generateScopedName": "[name]__[local]___[hash:base64:5]"
        }]
        ]
    };
    