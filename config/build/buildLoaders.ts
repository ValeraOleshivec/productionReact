import webpack from "webpack";


const buildLoaders = ():webpack.RuleSetRule[] => {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: 'ts-loader',
    }
    const cssLoader ={
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }

    return [
       typeScriptLoader,cssLoader
    ]
};

export default buildLoaders;