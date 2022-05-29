---
layout: note
title: vue上传并裁剪图片
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<el-dialog
  class="dialog"
  title="申请特卖"
  :visible.sync="dialogVisible"
  width="496px">
  <el-upload
    v-if="!imgChange"
    class="upload"
    ref='upload'
    drag
    :show-file-list="false"
    action="https://jsonplaceholder.typicode.com/posts/"
    :auto-upload="false"
    :on-change="fileChange">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
  <div class="cropper-container"
    v-else>
    <vue-cropper
      ref="cropper"
      :img="cropImg"
      :outputSize="1"
      outputType="png"
      :autoCrop="true"
      :autoCropWidth="200"
      :autoCropHeight="200"
      :fixedBox="true" />
    <el-button class="cropper-back" @click="cropperBack">重新选择</el-button>
  </div>
  <div class="p-count-container">
    <span>特卖数量:</span>
    <el-input-number class="p-count" v-model="saleCount" @change="inputNumberChange($event)" :min="1" :max="999" label="描述文字"></el-input-number>
    <span class="warning">低于数量要求</span>
  </div>
  <div class="p-price-container">
    <span>特卖价格: </span>
    <span class="money">¥</span>
    <el-input class="d-price" placeholder="输入价格" v-model="salePrice" type="info"/>
    <span class="warning">高于建议价格</span>
  </div>
  <div class="apply-container">
    <el-button class="apply" @click="apply">申请</el-button>
    <span><span class="warning">*</span>整点竞价上线</span>
  </div>
  <!-- <el-button class="cancel" @click="dialogVisible = false">取 消</el-button> -->
</el-dialog>
```

```
data() {
    return {
      headerTitles: [
        "零件号、名称",
        "产地、品牌设置 *",
        "库存、售卖数量",
        "底价、销售价",
        "城市 * ",
        "仓库 *",
        "货架",
        "状态",
        "操作"
      ],
      dialogVisible: false,
      saleCount: 3, // 默认建议上传 3 个以上
      salePrice: 0, // 出售价格
      cropImg: '', // 需要裁剪的图片链接
      imgChange: false, // 图片是否变化，决定显示那个图片处理工具
    };
},
fileChange(file, fileList) {
      this.cropImg = file.url
      this.imgChange = true
    },
    inputNumberChange(number) {
      console.log(number)
    },
    apply() { // 申请特卖会填写完毕的申请按钮
      this.$refs.cropper.startCrop()
      this.$refs.cropper.getCropData((data) => {
        // do something
        console.log(data)
      })
    },
    cropperBack() {
      this.imgChange = false
      this.cropImg = ''
    }
}
```
  