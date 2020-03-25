<template>
  <view class="card-item">
    <view class="card-name">{{cardInfo.cardName}}({{cardInfo.balance}})</view>
    <view class="card-money">¥{{cardInfo.money}}</view>
    <view
      class="card-active"
    >有效期：{{cardInfo.hasActive?cardInfo.activeTime:'使用即激活'}}</view>
    <view class="card-scale">
      <view class="scale">{{cardInfo.cardScale}}</view>
      <view class="scale">{{cardInfo.hasActive?'已激活':'未激活'}}</view>
    </view>
    <view @click="handleToRightPage(cardInfo.id)" class="card-right">会员权益</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
@Component({
  name: 'CardItem'
})
export default class CardItem extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  private cardInfo!: any;

  @Emit('toRightPage') private toRightPage(id: number): void {}
  // 点击每一项
  private handleToRightPage(id: number): void {
    this.toRightPage(id);
  }
  onLoad() {}
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
