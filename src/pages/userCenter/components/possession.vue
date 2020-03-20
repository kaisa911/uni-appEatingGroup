<template>
  <view class="my-posscession">
    <view @click="handleClick(1)" class="item">
      <view class="item-title">我的预约</view>
      <view class="item-image border">
        <image class="item-image-img" src="../../../static/image/preOrder.png" />
      </view>
      <view class="item-number">{{userInfo.myOrder}}个预约</view>
    </view>
    <view @click="handleClick(2)" class="item">
      <view class="item-title">我的卡包</view>
      <view class="item-image border">
        <image
          class="item-image-img"
          src="../../../static/image/curriculum.png"
        />
      </view>
      <view class="item-number">{{userInfo.cardName}}</view>
    </view>
    <view @click="handleClick(3)" class="item">
      <view class="item-title">我的课程包</view>
      <view class="item-image">
        <image class="item-image-img" src="../../../static/image/card.png" />
      </view>
      <view class="item-number">私教包&兑换券</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  name: 'MyPosscession'
})
export default class MyPosscession extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  private userInfo!: Global.IUserInfo;
  onReady() {}

  @Emit('handleToPossession') private toOtherPage(index: number): void {}
  // 点击每一项
  private handleClick(index: number): void {
    this.toOtherPage(index);
  }
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
