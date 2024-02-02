import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'


const config:webpack.Configuration = {
    mode:'development',
    entry: path.resolve(__dirname,'src','index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname,'build'),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules|\.d\.ts$/,
                use: {
                    loader:'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false, // this option will solve the issue
                        },
                    },
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    }
}
export default config