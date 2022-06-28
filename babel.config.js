module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          atoms: './atoms',
          components: './components',
          _hooks: './_hooks',
          images: './images',
          navigation: './navigation',
          screens: './screens',
          src: './src',
          states: './states',
          themes: './themes',
          types: './types',
          utility: './utility',
          __mocks__: './__mocks__',
          __tests__: './__tests__'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
}
