<template>
  <view class="my-coupon">
    <Tabs
      :currentId="currentId"
      :tabList="tabList"
      @changeTabItem="changeTabItem"
    ></Tabs>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from '../components/tab.vue';

@Component({
  name: 'MyCoupon',
  components: {
    Tabs
  }
})
export default class MyCoupon extends Vue {
  private tabList: Global.ITabItem[] = [
    { id: '1', name: '待使用' },
    { id: '2', name: '已过期' }
  ];
  private currentId: string = '1';
  onLoad() {}

  // 变更tab
  private changeTabItem(id: string): void {
    this.currentId = id;
  }
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
