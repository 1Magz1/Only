import webpack from 'webpack'
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

export const loaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  }

  const scssLoader = buildCssLoader(isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }


  return [
    fileLoader,
    typescriptLoader,
    cssLoader,
    scssLoader,
    svgLoader
  ]
}
