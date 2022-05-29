---
layout: note
title: element级联地区实例代码
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<template>
  <el-cascader class="block" :props="areas" @change="handleChange"></el-cascader>
</template>

<script>
export default {
  data() {
    return {
      provinceCode: '',
      areas: {
        lazy: true,
        lazyLoad: async (node, resolve) => {
          const { level } = node
          if (level === 1) {
            resolve(await this.getCity({ provinceCode: node.value }))
          } else if (level === 2) {
            resolve(await this.getArea({ cityCode: node.value }))
          } else {
            resolve(await this.getProvince())
          }
        },
      },
    }
  },
  mounted() {},
  methods: {
    handleChange(value) {
      this.$emit('change', { value })
    },
    async getProvince() {
      let province = this.$store.state.area_info.province
      if (province) return province

      try {
        province = (await this.$api.getProvince()).map((i) => ({
          value: i.provinceCode,
          label: i.provinceName,
        }))
        this.$store.commit('updateAreaInfo', { province })
        return province
      } catch (error) {
        return []
      }
    },
    async getCity({ provinceCode }) {
      console.log({ provinceCode })
      this.provinceCode = provinceCode
      let province = this.$store.state.area_info.province
      if (province && province[provinceCode]) return province[provinceCode]
      try {
        let city = (await this.$api.getCity({ provinceCode })).map((i) => ({
          value: i.cityCode,
          label: i.cityName,
        }))
        return city
      } catch (error) {
        return []
      }
    },
    async getArea({ cityCode }) {
      console.log({ cityCode })
      let province = this.$store.state.area_info.province
      if (province && province[this.provinceCode] && province[this.provinceCode][cityCode]) return province[this.provinceCode][cityCode]
      try {
        let area = (await this.$api.getArea({ cityCode })).map((i) => ({
          value: i.areaCode,
          label: i.areaName,
          leaf: true,
        }))
        return area
      } catch (error) {
        return []
      }
    },
  },
}
</script>

<style scoped>
</style>
```
  