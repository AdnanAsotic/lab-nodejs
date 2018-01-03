import path from 'path';

export default {
  debug: true, // debugging infos
  devtool: 'inline-source-map', // number of dev tools
  noInfo: false, // display all files to bundle
  entry: [
    path.resolve(__dirname, 'src/index') // start __dirname = currentdir
  ],
  target: 'web',

  // destination folder (build will be served from memory)
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [], // plugins and so on
  module: { // loaders for specific things
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
