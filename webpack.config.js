module.exports = {
    //mode: 'production',
    mode: 'development',
    entry: './src/Main.ts',
    output: {
        path: `${__dirname}/docs/ts`,
        filename: "ts.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
    devtool: "source-map",
    watch: true
};