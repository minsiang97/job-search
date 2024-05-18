module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['./src'],
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@components': './src/components',
          '@themes': './src/themes',
          '@data': './src/data',
        },
      },
    ],
  ],
};
