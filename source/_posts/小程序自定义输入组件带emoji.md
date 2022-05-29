---
layout: note
title: 小程序自定义输入组件带emoji
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

使用`<ykh-input :show="input_show" :emoji="input_show_with_emoji" @input="input" @confirm="confirmInput" @mask="clickInputMask" @keyboard="keyboard"></ykh-input>`

需要实现`confirmInput`函数，`input`函数可选。

custom-input.vue
```html
<template>
  <view class="input-box-mask" :class="{'input-box-mask-show': show}" @click="clickMask" data-self="1" @touchstart="clickMask">
    <view class="input-box" :style="{bottom: keyboard_height + 'px'}">
      <slot name="left"></slot>
      <input class="input-main" type="text" v-model="value" :placeholder="placeholder" :focus="inputFocus" :adjust-position="false" @input="input" @confirm="confirm"
        @click="clickInput" @focus="clickInput" @keyboardheightchange="changeKeyboardHeight">
      <image class="image-emoji-switch" :src="setSrc('icon/icon-emoji.png')" mode="aspectFill"
        @click="clickEmojiSwitch"></image>
      <slot name="right"></slot>
    </view>
    <view class="emoji-box" :style="{height: emoji_box_height + 'px'}" v-show="emoji_list_show">
      <view class="emoji-list" @click.stop="clickEmoji">
        <image v-for="(name, index) of emoji_list" class="image-emoji" :src="setSrc('icon/emoji/' + name + '.png')"
          mode="aspectFill" :data-index="index"></image>
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    name: "input-box",
    props: {
      show: Boolean,
      emoji: Boolean,
      placeholder: {
        type: String,
        default: '写评论…',
      },
    },
    data() {
      return {
        value: '',
        emoji_list: ['微笑',
          '微笑亲亲',
          '微笑天使',
          '无语',
          '嘻嘻',
          '喜笑颜开',
          '吓死了',
          '想一想',
          '笑的满地打滚',
          '笑哭了',
          '斜眼笑',
          '羞涩亲亲',
          '羞涩微笑',
          '晕头转向',
          '眨眼',
          '震惊',
          '龇牙咧嘴',
          '啊',
          '安静的脸',
          '傲慢',
          '抱抱',
          '爆炸头',
          '闭嘴',
          '不高兴',
          '不满',
          '不说',
          '沉默',
          '沉思',
          '吃惊',
          '打哈欠',
          '打喷嚏',
          '大笑',
          '带单片眼镜的脸',
          '担心',
          '单眼吐舌',
          '倒脸',
          '得意',
          '恶心',
          '发财',
          '发烧',
          '翻白眼',
          '放声大哭',
          '飞吻',
          '感冒',
          '哈哈',
          '害怕',
          '汗',
          '好吃',
          '好崇拜哦',
          '呵呵',
          '嘿嘿',
          '花痴',
          '滑稽',
          '极度痛苦',
          '缄默',
          '聚会笑脸',
          '恳求的脸',
          '哭',
          '苦笑',
          '困',
          '困惑',
          '困扰',
          '累',
          '累死了',
          '冷汗',
          '冷脸',
          '冷漠',
          '脸发烧',
          '脸红',
          '流口水',
          '眯眼吐舌',
          '墨镜笑脸',
          '牛仔帽脸',
          '怒火中烧',
          '呕吐',
          '亲亲',
          '生气',
          '失望',
          '失望但如释重负',
          '受伤',
          '书呆子脸',
          '睡着了',
          '说谎',
          '松了口气',
          '挑眉',
          '痛苦',
          '头晕眼花',
          '吐舌',
          '微微不满'
        ],
        emoji_list_show: this.emoji,
        keyboard_height: 0,
        emoji_box_height: 0,
      }
    },
    computed: {
      inputFocus() {
        return this.show && !this.emoji_list_show
      }
    },
    watch: {
      emoji(val) {
        // console.log(val)
        this.emoji_list_show = this.emoji
        if(val) this.keyboard_height = 0
      }
    },
    methods: {
      clickInput() {
        this.emoji_list_show = false
        this.keyboard_height = this.emoji_box_height
      },
      input(e) {
        this.$emit('input')
      },
      confirm() {
        this.$emit('confirm', {
          value: this.value
        })
        this.value = ''
        this.hideKeyboard()
      },
      clickMask(e) {
        if (e.target.dataset.self) {
          this.$emit('mask')
          this.emoji_list_show = false
          this.hideKeyboard() 
        }
      },
      hideKeyboard() {
        uni.hideKeyboard()
      },
      clickEmojiSwitch() {
        this.emoji_list_show = !this.emoji_list_show
        if(this.emoji_list_show) this.keyboard_height = 0
        else {
          this.keyboard_height = this.emoji_box_height
        }
      },
      clickEmoji(e) {
        const {
          index
        } = e.target.dataset
        const emoji_name = this.emoji_list[index]
        if (emoji_name) this.value += `[${emoji_name}]`
      },
      changeKeyboardHeight(e) {
        const {
          height,
          duration
        } = e.detail
        // emoji_box存在的时候，就不给高度了
        if(!this.emoji_list_show) this.keyboard_height = height
        // 第一次记录键盘高度给emoji_box
        if(!this.emoji_box_height) {
          this.emoji_box_height = height
          this.$emit('keyboard', e.detail)
        }
        // console.log(e.detail)
      },
    }
  }
</script>

<style>
  .input-box-mask {
    position: fixed;
    top: 0%;
    left: 0%;
    transform: translateY(102vh);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .2);
  }

  .input-box {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: white;
    border-top: 2rpx solid #EDEDED;
    padding: 18rpx 32rpx;
  }

  .input-box-mask-show {
    transform: translateY(0);
  }

  .input-main {
    flex: 1;
    height: 64rpx;
    background: #F0F1F2;
    border-radius: 32rpx;
    padding: 0 30rpx;
  }

  .image-emoji-switch {
    width: 64rpx;
    height: 64rpx;
    padding: 16rpx;
    margin-left: 24rpx;
    margin-right: -16rpx;
  }

  .emoji-box {
    height: 400rpx;
    padding: 0;
    background: #F0F1F2;
    font-size: 28rpx;
    color: #333333;
    line-height: 28rpx;
  }

  .emoji-list {
    position: relative;
    width: 720rpx;
    height: 100%;
    margin: 0 auto;
    padding-top: 40rpx;
    overflow-y: scroll;
  }

  .emoji-list::before {
    content: '全部表情';
    position: absolute;
    top: 10rpx;
    left: 0;
  }

  .image-emoji {
    width: 60rpx;
    height: 60rpx;
    padding: 24rpx 50rpx 0 0;
    box-sizing: content-box;
  }

  .image-emoji:nth-child(7n) {
    padding-right: 0;
  }
</style>
```

input_mixin.js
```js
export default {
  data() {
    return {
      input_show: false,
      input_show_with_emoji: false,
      keyboard_info: {
        height: 0
      },
      system_info: uni.getSystemInfoSync(),
      input_location_query: '', // 定位元素
    }
  },
  methods: {
    // 发送表情
    clickEmoji(index, type) {
      this.input_show = true
      this.input_show_with_emoji = true
    },
    clickInputMask(e) {
      this.hideInputBox()
    },
    hideInputBox() {
      this.input_show = false
      this.input_show_with_emoji = false
    },
    keyboard(e) {
      // console.log('this.keyboard_info'+e.height)
      this.keyboard_info = e
      this.scrollToInput()
    },
    scrollToInput() {
      if(!this.input_location_query) return
      uni.createSelectorQuery().select(this.input_location_query)
        .boundingClientRect(res => {
          // console.log({res})
          // console.log(11111111111112222222222)
          // 偏移量、在键盘下面、在键盘上面
          const offset = 100,
            screen_height = this.system_info.screenHeight,
            top = res.top,
            keyboard_height = this.keyboard_info.height,
            top_safe_height = screen_height - keyboard_height - offset // 去掉键盘的安全空白区域
            ,
            is_top = top_safe_height > top
          let offset_top = 0
          // 在上面需要滚下来一点
          // console.log({scrollTo: this.scrollTop, top_safe_height, top})
          offset_top = this.scrollTop - (top_safe_height - top)
          // console.log(offset_top)
          uni.pageScrollTo({
            scrollTop: offset_top,
            duration: 300,
          })
        }).exec()
    },
  }
}
```
  