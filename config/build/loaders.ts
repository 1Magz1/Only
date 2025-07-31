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

  const cssLoader = buildCssLoader(isDev)


  return [
    fileLoader,
    typescriptLoader,
    cssLoader
  ]
}
