---
layout: note
title: video.js播放m3u8实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<video id="video" class="video-js vjs-big-play-centered video" controls x-webkit-airplay="allow" poster="" webkit-playsinline playsinline preload="auto">
  <source :src="video_url" type="application/x-mpegURL" />
</video>
```

```js
if (this.m3u8_play) {
  this.m3u8_play.src({ src: this.video_url, type: 'application/x-mpegURL' })
  this.m3u8_play.play()
}
else {
  this.m3u8_play = videojs(
    'video',
    {
      bigPlayButton: false,
      textTrackDisplay: false,
      posterImage: true,
      errorDisplay: false,
      controlBar: true,
    },
    function () {
      this.play()
    }
  )
}
```
  