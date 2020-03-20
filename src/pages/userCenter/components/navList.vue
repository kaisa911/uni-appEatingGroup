<template>
  <view id="nav-list">
    <view :key="item.url" v-for="(item) in navList">
      <view @click="handleClickItem(item)" class="list-item">
        <text class="item-name">{{item.name}}</text>
        <text class="arrow"></text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

interface IItem {
  name: string;
  url: string;
}

@Component({
  name: 'NavList'
})
export default class NavList extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: () => {
      return [
        { name: '我的优惠券', url: '' },
        { name: '运动记录', url: '' },
        { name: '关于FITLIFE', url: '' },
        { name: '消费记录', url: '' },
        { name: '客服反馈', url: '' },
        { name: '服务条款', url: '' }
      ];
    }
  })
  private navList!: IItem[];

  onReady() {}

  // 把点击事件的url传递给父组件
  @Emit('handleToPages') private toOtherPage(url: string): void {}
  // 点击每一项
  private handleClickItem(item: IItem): void {
    this.toOtherPage(item.url);
  }
}
</script>

<style lang="scss" scoped>
</style>
