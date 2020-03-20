<template>
  <view class="services">
    <view class="bold" style="text-align: center">关于FITLIFE</view>
    <view>
      Hi~最近在对自己参与过的项目进行总结，希望可以和大家分享学习交流。输出内容是检视自己的方式，所以我就来吸取经验了。
      通过研读各位优秀作者的精品，我学习到了不少知识。此次，以实际工作中遇到的情况作为案例，我将从0至1的产品中抽取重点模块进行分享。
      为了阅读体验，我将尽量简化常规化的环节，本次采用AXURE梳理prd——利用AXURE动态面板和内联框架，制作文档导航，提高浏览人员的阅读效率。
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'About'
})
export default class About extends Vue {
  onLoad() {}
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
