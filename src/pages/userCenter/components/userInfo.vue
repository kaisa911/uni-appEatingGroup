<template>
  <view class="user-info">
    <view class="info-top">
      <view class="top-left">
        <image class="avatar" :src="userInfo.avatar"></image>
      </view>
      <view class="top-right">
        <view class="name">
          <text>{{userInfo.name}}</text>
          <text class="button" @click="handleClickEdit">修改个人信息</text>
        </view>
        <view class="credits">
          <view class="credits-info">
            <view>卡路里积分：{{userInfo.calorie}}Cal</view>
            <view class="blank"></view>
            <view style="float:right">LV:{{userInfo.level}}&nbsp;&nbsp;&nbsp;{{userInfo.levelScore}}/{{userInfo.nextLevel}}</view>
          </view>
          <view class="progress-bar">
            <view class="progress" :style="computedWith"></view>
          </view>
        </view>
      </view>
    </view>
    <view class="info-bottom">
      <view class="balance">
       <text>储值卡余额：{{userInfo.balance}}元</text>
       <text class="button" @click="handleClickRight">查看权益</text>
      </view>
      <text class="button" style="margin-top:2rpx" @click="handleClickCard">购卡</text>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  name: 'UserInfo'
})
export default class UserInfo extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  private userInfo!: Global.IUserInfo;
  private get computedWith():string{
    return `width:${(this.userInfo.levelScore/this.userInfo.nextLevel*100).toFixed(2)}%`
  }

  onReady() {}

  // 购卡
  @Emit('handleBuyCard') private handleBuyCard(): void {}
  // 点击每一项
  private handleClickCard(): void {
    this.handleBuyCard();
  }

  // 查看权益
  @Emit('handleViewRight') private handleViewRight(): void {}
  // 点击每一项
  private handleClickRight(): void {
    this.handleViewRight();
  }

  // 修改信息
  @Emit('handleEditInfo') private handleEditInfo(): void {}
  // 点击每一项
  private handleClickEdit(): void {
    this.handleEditInfo();
  }
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
