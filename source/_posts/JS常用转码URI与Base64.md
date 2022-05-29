---
layout: note
title: JS常用转码URI与Base64
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

> 这两天拉取GitHub数据时候，发现Base64的加密解密有点问题（不考虑Accept），于是查资料延伸出相关内容，整理发给小伙伴们。

市面上一大堆现成的转码库，但是秉承着 **能少则少，能原生则原生** 的策略，我们优先考虑JS自带的转码工具（万不得已再考虑别人的，比如无法实现）。

**另外注意，这里是转码，不是加密，转码和加密是两个概念。**简单来说，转码是为了能够正常使用，而加密是为了仅自己人能正常使用。

## Escape

这个是顺便提一下，普通的纯字符串编码，注意是纯字符串，跟下面说的链接是不同的

### 转码

`escape("中文")` => `"%u4E2D%u6587"`

### 解码

`unescape("%u4E2D%u6587")` => `"中文"`

> 敏锐的小伙伴可能见过感觉见过类似的%xx的结构，是的，你现在明白了吗？

---

## URI方面

关于URI的转码问题，主要是出现在链接包含中文的问题中，虽说现在基本上已经支持中文，但是有时候不论是为了美观、安全还是什么原因，还是有必要转码一下。

### 转码

1. encodeURI，转码后链接还需要正常使用

    `encodeURI("https://zweizhao.com/文章/JS常用转码URI与Base64.md")`
    => `"https://zweizhao.com/%E6%96%87%E7%AB%A0/JS%E5%B8%B8%E7%94%A8%E8%BD%AC%E7%A0%81URI%E4%B8%8EBase64.md"`

    转码后的链接还是一个正常链接，是可以做跳转操作的。

2. encodeURIComponent，转码后链接不再当做正常链接使用，比如作为参数

    ```
    var pa = encodeURIComponent("https://zweizhao.com/文章/JS常用转码URI与Base64.md")

    console.log(pa) // "https%3A%2F%2Fzweizhao.com%2F%E6%96%87%E7%AB%A0%2FJS%E5%B8%B8%E7%94%A8%E8%BD%AC%E7%A0%81URI%E4%B8%8EBase64.md"

    var realURI = "https://zweizhao.com/any?param=" + pa // "https://zweizhao.com/any?param=https%3A%2F%2Fzweizhao.com%2F%E6%96%87%E7%AB%A0%2FJS%E5%B8%B8%E7%94%A8%E8%BD%AC%E7%A0%81URI%E4%B8%8EBase64.md"

    // todo...其他使用方式
    ```

    上面的pa已经是一堆非链接的字符串了，所以可以当做纯参数等使用。

    > 二者区别
    
    函数|说明|使用场景
    -|-|-
    encodeURI|不转码这些：*ASCII字母、数字、~!@#$&*()=:/,;?+'\\\\||链接里面内容进行转换
    encodeURIComponent|不转吗这些：*ASCII字母、数字、~!*()'*|无差别转换整个链接

### 解码
 
解码就简单了，相对转码反着用即可。

1. decodeURI

    ```
    var en = encodeURI("https://zweizhao.com/文章/JS常用转码URI与Base64.md")

    console.log(en) // "https://zweizhao.com/%E6%96%87%E7%AB%A0/JS%E5%B8%B8%E7%94%A8%E8%BD%AC%E7%A0%81URI%E4%B8%8EBase64.md"

    var de = decodeURI(en)

    console.log(de) // "https://zweizhao.com/文章/JS常用转码URI与Base64.md"
    ```

2. decodeURIComponent

    ```
    var en = encodeURIComponent("https://zweizhao.com/文章/JS常用转码URI与Base64.md")
    
    console.log(en) // "https%3A%2F%2Fzweizhao.com%2F%E6%96%87%E7%AB%A0%2FJS%E5%B8%B8%E7%94%A8%E8%BD%AC%E7%A0%81URI%E4%B8%8EBase64.md"

    var de = decodeURIComponent(en)

    console.log(de) // "https://zweizhao.com/文章/JS常用转码URI与Base64.md"
    ```

> 实际业务中，encodeURIComponent与decodeURIComponent相对使用较多。

---

## Base64方面

    看到这里请记住，以后Base64转码解码不用再去百度或Google找在线库了，直接ctrl+shift+i调出Chrome的调试器，使用btoa与atob转码与解码即可。

### 转码

`btoa("i am your boyfriend.")` => `"aSBhbSB5b3VyIGJveWZyaWVuZC4="`

### 解码

`atob("aSBhbSB5b3VyIGJveWZyaWVuZC4=")` => `"i am your boyfriend."`

虽说好用，但是有个坑对我们来说很不友好，恩，中文，如下：

```
btoa("中文") // The string to be encoded contains characters outside of the Latin1 range.
```

意思就是超出支持范围，ASCII。

但是，如果你非要使用btoa来base64转码中文，也不是不行，就是略微蛋疼。如下：

```
btoa(escape("中文")) // "JXU0RTJEJXU2NTg3"

unescape(atob("JXU0RTJEJXU2NTg3")) // "中文"

btoa(encodeURI("https://zweizhao.com/文章/JS常用转码URI与Base64.md"))
// "aHR0cHM6Ly96d2Vpemhhby5jb20vJUU2JTk2JTg3JUU3JUFCJUEwL0pTJUU1JUI4JUI4JUU3JTk0JUE4JUU4JUJEJUFDJUU3JUEwJTgxVVJJJUU0JUI4JThFQmFzZTY0Lm1k"

decodeURI(atob("aHR0cHM6Ly96d2Vpemhhby5jb20vJUU2JTk2JTg3JUU3JUFCJUEwL0pTJUU1JUI4JUI4JUU3JTk0JUE4JUU4JUJEJUFDJUU3JUEwJTgxVVJJJUU0JUI4JThFQmFzZTY0Lm1k"))
// "https://zweizhao.com/文章/JS常用转码URI与Base64.md"

btoa(encodeURIComponent("https://zweizhao.com/文章/JS常用转码URI与Base64.md"))
// "aHR0cHMlM0ElMkYlMkZ6d2Vpemhhby5jb20lMkYlRTYlOTYlODclRTclQUIlQTAlMkZKUyVFNSVCOCVCOCVFNyU5NCVBOCVFOCVCRCVBQyVFNyVBMCU4MVVSSSVFNCVCOCU4RUJhc2U2NC5tZA=="

decodeURIComponent(atob("aHR0cHMlM0ElMkYlMkZ6d2Vpemhhby5jb20lMkYlRTYlOTYlODclRTclQUIlQTAlMkZKUyVFNSVCOCVCOCVFNyU5NCVBOCVFOCVCRCVBQyVFNyVBMCU4MVVSSSVFNCVCOCU4RUJhc2U2NC5tZA=="))
// "https://zweizhao.com/文章/JS常用转码URI与Base64.md"
```
  