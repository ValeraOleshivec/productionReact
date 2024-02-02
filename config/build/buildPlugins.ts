import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPaths} from "./types/config";

const buildPlugins = (paths:BuildPaths):webpack.WebpackPluginInstance[] => {
    return  [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
};

export default buildPlugins;