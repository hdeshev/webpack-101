%title: Webpack 101
%author: hdeshev
%date: 2016-11-15

-> Webpack <-
=========

-> Turning hundreds of broken modules. <-
-> Into one broken module. <-

-------------------------------------------------

# Agenda

- How webpack works
- How we use it in {N} until 2.4
- How we use it in {N} after 2.4
- Common issues
- Troubleshooting

-------------------------------------------------

# How it works

- Traversing require calls.
    - Not required => not bundled!
- A complete build system.

-------------------------------------------------

# Demo

-> ## Hello, world <-

-------------------------------------------------

# nativescript-dev-webpack

- before 2.4
    - demo
- after 2.4
    - demo

-------------------------------------------------
# Loaders

- awesome-typescript-loader
- html-loader
- others: SASS, etc

-------------------------------------------------

# Loaders example

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
        ]
    },

-------------------------------------------------

# Plugins

- CommonsChunkPlugin
- CopyWebpackPlugin
- DefinePlugin
- custom plugins developed for {N}

-------------------------------------------------

# Plugins example

    plugins: [
        new webpack.DefinePlugin({
            global: 'global',
            __dirname: '__dirname',
            "global.TNS_WEBPACK": 'true',
        }),
        new CopyWebpackPlugin([
            { from: "**/*.css" },
            { from: "**/*.html" },
            { from: "**/*.xml", ignore: [
                "platforms/**", "App_Resources/**"] },
        ]),
    ]

-------------------------------------------------

# Common issues

- Dynamic require
    - component builder and XML module resolution
    - `global.loadModule` + `global.registerModule`
- Pre-bundled code
- Broken third-party packages
    - package.json `main` pointing to missing files
    - embedding TypeScript helpers

-------------------------------------------------
