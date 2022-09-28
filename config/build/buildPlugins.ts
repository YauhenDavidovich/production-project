import {BuildOptions} from "./types/config";

const HTMLWebpackPlugin = require('html-webpack-plugin');
import * as path from "path";
import * as webpack from "webpack";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]

}
