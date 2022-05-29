---
layout: note
title: 美女图片小程序uni-app模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 主页
```html
<template>
  <view class="page">
    <template v-if="currentInfo">
      <image class="img" :src="currentInfo.picUrl" mode="aspectFill"></image>
      <!-- <view class="title">{{currentInfo.title}}</view>
      <view class="desc">{{currentInfo.description}}</view>
      <view class="time">{{currentInfo.ctime}}</view> -->
    </template>
    <text v-else>...</text>
    <view class="ctrls">
      <view :style="!currentIndex ? 'opacity: .2;' : 'opcacity: 1;'" class="button" @click="pre">上篇</view>
      <view class="button" @click="openAll">组图</view>
      <view :style="isLast ? 'opacity: .2;' : 'opcacity: 1;'" class="button" @click="next">下篇</view>
    </view>
  </view>
</template>

<script>
  import singleMixin from '@/mixins/single'

  export default {
    mixins: [singleMixin],
    data() {
      return {
        infos: [],
        currentIndex: 0,
        activePage: 1,
      }
    },
    computed: {
      currentInfo() {
        return this.infos[this.currentIndex]
      },
      isLast() {
        return !this.infos.length || this.currentIndex === this.infos.length - 1
      },
    },
    onLoad(option) {
      this.activePage = option.activePage
      this.getInfo()
    },
    methods: {
      async getInfo() {
        this.clean()
        let res = await this.$http.tGet(this.$api.BEAUTY, {
          num: 10,
          page: ~~(Math.random() * Number(this.activePage)),
        })
        if (res) {
          this.infos = res.map(i => ({
            ...i,
            title: i.title.replace(/\[\d+P*\]$/, ''),
            ctime: this.$dayjs().format('YYYY-MM-DD')
          }))
        }
      },
      pre() {
        if (!this.currentIndex) return
        this.currentIndex--
      },
      next() {
        if (this.isLast) return
        this.currentIndex++
      },
      openAll() {
        let { url, picUrl } = this.currentInfo
        let subs = picUrl.split('.')
        uni.navigateTo({
          url: `/pages/beauty/all?url=${this.currentInfo.url}&format=${subs[subs.length - 1]}`,
        })
      },
      clean() {
        this.infos = []
        this.currentIndex = 0
      },
    }
  }
</script>

<style scoped lang="less">
  .page {
    align-items: center;
  }

  .img {
    width: 650upx;
    height: 1000upx;
    margin: 30upx 0;
    border: 4upx solid black;
    border-radius: 20upx;
  }

  .view() {
    width: 650upx;
  }

  .title {
    .view();
    font-size: 32upx;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
  }

  .desc {
    .view();
    font-size: 24upx;
    font-family: PingFangSC-Regular;
    color: #666;
    line-height: 36upx;
    margin: 22upx 0;
  }

  .time {
    .view();
    font-size: 32upx;
    font-family: PingFangSC-Regular;
    color: #666;
    text-align: right;
  }

  .ctrls {
    display: flex;
    justify-content: space-between;
    width: 690upx;
    margin: 16upx 0;

    .button {
      width: 200upx;
      height: 66upx;
      background: #fab909;
      border: 4upx solid black;
      border-radius: 10upx;
      font-size: 32upx;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
    }
  }
</style>
```

## 更多页

```html
<template>
  <view class="page">
    <image class="img" v-for="(item, idx) of infos" :key='idx' :src="item" mode="aspectFill" @click="preview(item, idx)"></image>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        infos: [],
        currentIndex: 0,
      }
    },
    onLoad(option) {
      this.getInfos(option.url, option.format)
    },
    methods: {
      async getInfos(url, format) {
        let res = await this.$http.tGet(this.$api.HTML2PIC, {
          url,
          format,
        })
        if(res) {
          this.infos = Array.from(new Set(res.map(i => i.picUrl)))
        }
      },
      preview(item, idx) {
        this.currentIndex = idx
        uni.previewImage({
          current: this.currentIndex,
          urls: this.infos,
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .page {
    display: block;
    text-align: center;
  }
  .img {
    width: 650upx;
    height: 720upx;
    margin: 30upx 0;
    border: 4upx solid black;
    border-radius: 20upx;
    margin-bottom: 32upx;
  }
</style>
```
  