
export default {
  css: [
    // CSS file in the project
    '~/assets/css/ress.min.css',
    '~/assets/css/fonts.css',
    // 'fork-awesome',
    '~/assets/css/main.css',
  ],
  serverMiddleware: [
    { path: "/server-middleware", handler: "~/server-middleware/rest.js" },
  ],
  build: { // https://github.com/nuxt/nuxt.js/issues/9224#issuecomment-830577523
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
