var path = require("path");

module.exports = {
    context: path.resolve("./"),
    entry: "./main",
    output: {
        pathinfo: true,
        path: path.resolve("./dist"),
        libraryTarget: "commonjs2",
        filename: "[name].js",
    },
};
