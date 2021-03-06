
export default {
  css: [
    // CSS file in the project
    '~/assets/css/ress.min.css',
    '~/assets/css/fonts.css',
    '~/assets/css/fork-awesome.min.css',
    '~/assets/css/main.css',
  ],
  head: {
    title: 'Beabee Playground',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  modules: ['@nuxt/http'],
  http: {serverTimeout: 5000},
  serverMiddleware: [
    '~/server-middleware/rest.js',
  ],
  target: 'server',
  build: { // https://github.com/nuxt/nuxt.js/issues/9224#issuecomment-830577523
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
