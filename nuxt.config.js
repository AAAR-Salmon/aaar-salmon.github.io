// noinspection JSUnusedGlobalSymbols
export default {
  target: 'static',
  head: {
    titleTemplate: title => title ? `${title} - AAAR-Salmon` : 'AAAR-Salmon',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ]
}
