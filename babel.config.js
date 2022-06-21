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
          navigation: './navigation',
          screens: './screens',
          src: './src',
          themes: './themes',
          types: './types',
          utility: './utility'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
}
