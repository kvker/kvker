---
layout: note
title: uniapp区分安卓还是iOS
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
switch(uni.getSystemInfoSync().platform){
			    case 'android':
			       console.log("安卓")
			       break;
			    case 'ios':
			       console.log('运行iOS上')
			       break;
			    default:
			       console.log('运行在开发者工具上')
			       break;
			}
```
  