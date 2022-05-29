---
layout: note
title: 小目标账单uni-app模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# 页面

## index.vue
```html
<template>
  <view class="page">
    <view v-if="!targetState" class='btn'>获取账单中...</view>
    <view v-else-if="targetState === 2" class="btn" @click='clickCreate'>创建账单</view>
    <template v-else>
      <view class="total">
        <view class="target">
          离
          <text class="underline">{{main.target}}</text>
          还差
          <text class="underline">{{lastDays}}</text>
          天
        </view>
        <view class="spend">
          <text>还差</text>
          <text class="normal">{{totalAway}}</text>
          <text>元</text>
        </view>
        <view class="markDays">
          <text>记账第</text>
          <text class="normal">{{totalDays}}</text>
          <text>天</text>
        </view>
      </view>
      <view class="mark">
        <view class='btn' @click='spendShow = true'>支出 - 远离小目标</view>
        <view class="money">
          <text>共消费</text>
          <text class='normal'>{{totalSpend}}</text>
          <text>元</text>
        </view>
      </view>
      <view class="mark">
        <view class='btn' @click='incomeShow = true'>收入 - 靠近小目标</view>
        <view class="money">
          <text>小目标基金达</text>
          <text class="normal">{{totalIncome}}</text>
          <text>元</text>
        </view>
      </view>
      <button class="cancel" @click='clickCancel'>放弃</button>
      <confirm v-if='spendShow' title='输入支出金额' :type='0' @close='spendShow = false' @confirm='clickConfirm(0, $event)'></confirm>
      <confirm v-if='incomeShow' title='输入收入金额' :type='1' @close='incomeShow = false' @confirm='clickConfirm(1, $event)'></confirm>
      <completed v-if='completedShow' :totalDays='totalDays' @click='clickCompleted'></completed>
    </template>
  </view>
</template>

<script>
  import confirm from '@/components/target_bill/confirm'
  import completed from '@/components/target_bill/completed'

  export default {
    components: {
      confirm,
      completed,
    },
    data() {
      return {
        // 检测是否有账单，0：检测中，1：有，2：没有
        targetState: 0,
        main: {
          // 小目标
          target: '',
          // 预算
          budget: 0,
          // 月收入
          income: 0,
          // 收入列表
          listSpend: [],
          // 支出列表
          listIncome: [],
        },
        spendShow: false,
        incomeShow: false,
        completedShow: false, // 愿望完成
      }
    },
    computed: {
      // 每日收入
      dayIncome() {
        return this.main.income / 30
      },
      // 还差多少元
      totalAway() {
        return this.main.budget + this.totalSpend - this.totalIncome - (this.dayIncome * (this.totalDays - 1)) || ''
      },
      // 记账第几天
      totalDays() {
        return this.$dayjs().diff(this.$dayjs(this.main.createdAt), 'day') + 1
      },
      // 共消费
      totalSpend() {
        return this.main.listSpend.reduce((pre, cur) => pre + cur.price, 0) || 0
      },
      // 共收入
      totalIncome() {
        return this.main.listIncome.reduce((pre, cur) => pre + cur.price, 0) || 0
      },
      // 还差多少天
      lastDays() {
        return Math.ceil(this.totalAway / this.dayIncome) || 0
      },
    },
    onLoad(option) {
      uni.setNavigationBarTitle({
        title: '小目标账单',
      })
      this.getTarget()
    },
    onShow() {
      if (this.targetState === 2) {
        this.getTarget()
      }
    },
    methods: {
      async getTarget() {
        let res = await this.$http.avRetrieve(this.$classs.LITTLE_TARGET, query => {
          query.equalTo('user', this.$globalData.sourceUser)
          query.notEqualTo('completed', true)
        })
        if (res[0]) {
          this.targetState = 1
          this.main = res[0]
          this.checkCompleted()
        } else {
          this.targetState = 2
        }
      },
      clickCreate() {
        uni.navigateTo({
          url: '/pages/target_bill/create',
        })
      },
      /**
       * 检查是否完成
       */
      checkCompleted() {
        this.completedShow = this.lastDays < 1
      },
      async clickConfirm(type, item) {
        switch (type) {
          case 0:
            {
              let res = await this.$http.avArrayCtrl(this.$classs.LITTLE_TARGET, this.main.objectId, {
                key: 'listSpend',
                item,
              })
              if (res) {
                this.main.listSpend.push(item)
              }
            }
            break;
          case 1:
            {
              let res = await this.$http.avArrayCtrl(this.$classs.LITTLE_TARGET, this.main.objectId, {
                key: 'listIncome',
                item,
              })
              if (res) {
                this.main.listIncome.push(item)
              }
            }
            break;
          default:
            ;
        }
        this.checkCompleted()
      },
      clickCancel() {
        uni.showModal({
          title: '提示',
          content: '删除小目标？',
          success: async res => {
            if (res.confirm) {
              res = await this.$http.avDelete(this.$classs.LITTLE_TARGET, this.main.objectId)
              if (res) {
                this.targetState = 2
              }
            }
          },
        })
      },
      async clickCompleted() {
        this.completedShow = false
        this.targetState = 2
        await this.$http.avUpdate(this.$classs.LITTLE_TARGET, this.main.objectId, {completed: true})
      },
    },
    onShareAppMessage() {
      return {
        title: '一步一步，助你实现小目标！',
        path: '/pages/index/index',
      }
    },
  }
</script>

<style scoped lang="less">
  @import '~@/assets/css/target_bill/main.less';

  .page {
    justify-content: center;
    align-items: center;
  }

  .moneyMixin() {
    display: flex;
    justify-content: space-between;
    width: 480upx;
    font-size: 40upx;
    color: @mainTextColor;

    .normal {
      color: #756766;
    }
  }

  .total {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 33%;
    background-image: linear-gradient(-180deg, #FEF3AA 0%, #FFE888 100%);

    .target {
      font-size: 48upx;
      color: @mainTextColor;
      text-align: center;
    }

    .underline {
      color: #756766;
      border-bottom: 6upx solid @mainTextColor;
      margin: 0 40upx 0 20upx;
    }

    .spend,
    .markDays {
      .moneyMixin();
    }
  }

  .mark {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120upx;

    .btn {
      .buttonHightlight();
    }

    .money {
      .moneyMixin();
      width: 100%;
      font-size: 36upx;
      color: @mainTextColor;
    }
  }

  @cancelRB: 20upx;

  .cancel {
    position: absolute;
    right: @cancelRB;
    bottom: @cancelRB;
    padding: 0;
    line-height: normal;
    border-radius: 0;
    font-size: 24upx;
    color: red;
    background: transparent;
  }
</style>
```

## create.vue

```html
<template>
  <view class="page">
    <input-dream title='输入你的小目标' placeholder='请输入小目标' remind='注:如去日本' type='number' @input='inputCard(0, $event)'></input-dream>
    <input-dream title='小目标的预算' placeholder='请输入预算' remind='注：如5000' type='number' @input='inputCard(1, $event)'></input-dream>
    <input-dream title='月实际收入' placeholder='请输入月收入' remind='注：如5000' type='number' @input='inputCard(2, $event)'></input-dream>
    <view class="btn click" @click="goIndex">开始实现小目标</view>
  </view>
</template>

<script>
  import inputDream from '@/components/target_bill/input_dream'

  export default {
    components: {
      inputDream
    },
    data() {
      return {
        target: '',
        budget: '',
        income: 0,
      }
    },
    onLoad(option) {
    },
    methods: {
      async goIndex() {
        if (this.dataError()) return

        let target = {
          target: this.target,
          budget: +this.budget,
          income: +this.income,
          listSpend: [],
          listIncome: [],
          user: this.$globalData.sourceUser,
        }
        let res = await this.$http.avCreate(this.$classs.LITTLE_TARGET, target)
        if(res) {
          uni.navigateBack({
            delta: 1
          })
        }
      },
      dataError() {
        let error
        if (!this.target) {
          error = '请输入目标'
        } else if (!this.budget) {
          error = '请输入预算'
        } else if (!this.income) {
          error = '请输入月收入'
        } else if (!(this.income / 30)) {
          error = '月收入不正确，请至少大于30吧'
        }

        wx.showToast({
          title: error || '请前往你的小目标吧',
          icon: 'none',
          duration: 2000,
        })
        return error
      },
      inputCard(type, e) {
        let value = e.target.value
        switch (type) {
          case 0:
            this.target = value
            break
          case 1:
            this.budget = parseInt(value)
            break
          case 2:
            this.income = parseInt(value)
            break
        }
      },
    },
    onShareAppMessage() {
      return {
        title: '一步一步，助你实现小目标！',
      }
    },
  }
</script>

<style scoped lang='less'>
  @import '~@/assets/css/target_bill/main.less';

  .page {
    align-items: center;
    justify-content: space-around;
    padding: 100upx 16upx;

    .title-img {
      width: 580upx;
      height: 110upx;
    }

    .click {
      .buttonHightlight();
    }
  }
</style>
```

# 组件

## completed.vue

```html
<template>
  <view class="completed modal">
    <view class="content">
      <text class="title">~梦想实现~</text>
      <view class="congratulation">
        <text>恭喜！</text>
        <text class="middle">
          在记账
          <text class="total-days">{{totalDays}}</text>
          天内存到了梦想
        </text>
        <text>基金！</text>
      </view>
      <view class="btn again" @click="oneMore">再许个愿</view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      totalDays: {
        type: Number,
      },
    },
    methods: {
      oneMore() {
        this.$emit('click')
        uni.navigateTo({
          url: '/pages/target_bill/create',
        })
      },
    }
  }
</script>

<style scoped lang='less'>
  @import '~@/assets/css/target_bill/modal';

  .congratulation {
    display: flex;
    flex-direction: column;
    margin: 60rpx 0 60rpx 0;

    span {
      color: @mainTextColor;
    }

    .middle {
      argin-top: 60rpx;

      .total-days {
        margin: 0 10rpx;
      }
    }
  }

  .button {
    .buttonHightlight();
    width: 420rpx;
    height: 90rpx;
  }

  .check {
    .button();
    background-image: linear-gradient(-180deg, #FECBAA 0%, #F7975D 100%);
    color: white;
  }

  .again {
    .button();
  }
</style>
```

## confirm.vue

```html
<template>
  <view class="confirm modal">
    <view class="content">
      <text class="title">{{title}}</text>
      <input type="digit" class="input" v-model='price' placeholder='0'>
      <view class="marks">
        <view v-for='(mark, idx) of marks' :key='idx' :class='idx === currentIndex ? "btn mark selected" : "btn mark"' @click='clickMark(mark, idx)'>{{mark}}</view>
      </view>
      <view class="btn click" @click='clickConfirm'>确定</view>
      <view class="close" @click='$emit("close")'>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    type: Number,
    show: Boolean,
  },
  data() {
    return {
      marks: [],
      title: '',
      price: '',
      currentIndex: 0,
    }
  },
  mounted() {
    if(!this.type) {
      this.marks = ['饭钱', '交通', '购物', '人情', '其他']
      this.title = '输入支出金额'
    } else {
      this.marks = ['红包', '出售', '理财', '退款', '其他']
      this.title = '输入收入金额'
    }
  },
  methods: {
    clickConfirm() {
      this.$emit('confirm', {
        price: +this.price,
        mark: this.marks[this.currentIndex],
      })
      this.$emit('close')
    },
    clickMark(item, idx) {
      this.currentIndex = idx
    },
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/css/target_bill/modal.less';

.input {
  .inputBorder();
  width: 440upx;
  height: 100upx;
  border: 4upx solid #FED6A4;
  border-radius: 20upx;
  margin-top: 32upx;
}

.marks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 400upx;
  margin-top: 40upx;

  .mark {
    display: inline-block;
    width: 160upx;
    line-height: 64upx;
    border: 2upx solid #FED6A4;
    border-radius: 32upx;
    margin: 20upx 0;
    text-align: center;
    background: transparent;
    color: #333;
  }

  .selected {
    background-image: linear-gradient(-180deg, #FEF3AA 0%, #FFE888 100%);
    color: @mainTextColor;
  }
}

.click {
  .buttonHightlight();
  width: 420upx;
  height: 90upx;
  margin-top: 0;
}
</style>
```

## input_dream.vue

```html
<template>
  <view class="input-dream">
    <text class="title">{{title}}</text>
    <input :type="type" class="input" :placeholder="placeholder" @input="$emit('input', $event)">
    <text class="remind">{{remind}}</text>
  </view>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    remind: String,
    type: String,
  }
}
</script>

<style scoped lang='less'>
  @import '~@/assets/css/target_bill/main.less';

.input-dream {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: #983F24;
    font-size: 36upx;
  }

  .input {
    .inputBorder();
    width: 550upx;
    height: 90upx;
    border: 4upx solid #FED6A4;
    border-radius: 16upx;
    margin: 10upx 0;
  }

  .remind {
    display: inline-block;
    width: 100%;
    font-size: 20upx;
    text-align: right;
    color: #999;
  }
}
</style>
```

# 对应的less文件

## main.less
```less
@mainTextColor: #F3944E;

.fullScreen() {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.flexCenter() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonHightlight() {
  width: 480rpx;
  height: 90rpx;
  margin-top: 40rpx;
  background-image: linear-gradient(-180deg, #FEF3AA 0%, #FFE888 100%);
  border: 2rpx solid #FDE8A7;
  border-radius: 200rpx;
  color: #F3944E;
}

.inputBorder {
  border-box: box-sizing;
  padding-left: 40rpx;
}

button:after {
  border: none;
}
```

## mask.less
```less
@import '~@/assets/css/target_bill/main.less';

.modal {
  .fullScreen();
  .flexCenter();
  background: rgba(0,0,0,0.30);
}
```

## modal.less
```less
@import '~@/assets/css/target_bill/mask.less';

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 540rpx;
  height: 540rpx;
  background: #FFFBF5;
  border: 1px solid @mainTextColor;
  border-radius: 40rpx;

  .title {
    width: 524rpx;
    line-height: 94rpx;
    margin-top: 10rpx;
    border-top-left-radius: 40rpx;
    border-top-right-radius: 40rpx;
    text-align: center;
    background: #FFF5C4;
    color: @mainTextColor;
  }

  @imgWidth: 66rpx;
  .close {
    position: absolute;
    right: -@imgWidth;
    top: -@imgWidth;

    .close-img {
      width: @imgWidth;
      height: @imgWidth;
    }
  }
}
```
