---
layout: note
title: nuxt的proxy与host
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`npm i @nuxtjs/proxy @nuxtjs/axios`

nuxt.config.js
```js
/*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  proxy: true,
  },

  /**
   * Proxy
   */
  proxy: [
    ['/', { target: 'https://dev.test.proginn.com/', changeOrigin: true }]
  ],
```

package.json
```json
"config": {
    "nuxt": {
      "host": "local.proginn.com",
      "port": "3000"
    }
  },
```

  