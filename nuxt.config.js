export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/fonts/fontawesome5/css/all.min.css' },
      { rel: 'stylesheet', href: '/fonts/flaticon2/flaticon.css' },
      { rel: 'stylesheet', href: '/fonts/flaticon/flaticon.css' },
      { rel: 'stylesheet', href: '/fonts/line-awesome/css/line-awesome.css' },
      { rel: 'stylesheet', href: '/css/login.css' },
      { rel: 'stylesheet', href: '/css/perfect-scrollbar.css' },
      { rel: 'stylesheet', href: '/css/style.bundle.css' },
      { rel: 'stylesheet', href: '/css/light.css' },
      { rel: 'stylesheet', href: '/css/secondLight.css' },
      { rel: 'stylesheet', href: '/css/dark.css' },
      { rel: 'stylesheet', href: '/css/secondDark.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ]
  },

  router: {
    middleware: ['auth']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/setBaseUrl.js',
    '~plugins/getCustomerPermissions.js',
    '~injections/checkPermissions.js',
    '~injections/checkCustomerUserPermissions.js',
    '~injections/checkUserPermissions.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'post', propertyName: 'user' }
        }
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: location.href
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3010
  }
}
