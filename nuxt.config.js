export default {
  head: {
    titleTemplate: '%s - MMD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  ssr: false,
  target: 'static',
  plugins: ['@/plugins/vue-konva.js']
}
