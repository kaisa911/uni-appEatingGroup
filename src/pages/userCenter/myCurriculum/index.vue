<template>
  <view class="my-curriculum">
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
  name: 'MyCurriculum',
  components: {
    Tabs
  }
})
export default class MyCurriculum extends Vue {
  private tabList: Global.ITabItem[] = [
    { id: '1', name: '私教包' },
    { id: '2', name: '兑换券' }
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
