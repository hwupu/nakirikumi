export default {
  head: {
    titleTemplate: '%s - MMD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    '~/css/main.sass'
  ],
  components: true,
  ssr: false,
  target: 'static',
  router: {
    base: '/nakirikumi/'
  },
  plugins: ['@/plugins/vue-konva.js'],
  modules: ['nuxt-buefy'],
  buefy: {
    css: false,
    materialDesignIcons: false
  }
}
