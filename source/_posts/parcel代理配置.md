---
layout: note
title: parcel代理配置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`parcel-proxy-server`服务

示例代码

```js
const ParcelProxyServer = require('parcel-proxy-server');

// configure the proxy server
const server = new ParcelProxyServer({
  entryPoint: './index.html',
  parcelOptions: {},
  proxies: {
    // add proxies here
    '/api': {
      target: 'https://www.echartsjs.com',
      changeOrigin: true,
      pathRewrite: {
        '/api': '/examples'
      }
    }
  }
});

// the underlying parcel bundler is exposed on the server
// and can be used if needed
server.bundler.on('buildEnd', () => {
  console.log('Build completed!');
});

// start up the server
server.listen(8080, () => {
  console.log('Parcel proxy server has started');
});
```

代码可以启动的原因是调用了parcel的[api](https://parceljs.org/api.html)
  