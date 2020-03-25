<template>
  <view class="tabs">
    <view
      :class="[currentId===tab.id ? 'activeClass' : '', ]"
      :key="tab.id"
      @click="handleEmitedTab(tab.id)"
      class="tab-item"
      v-for="tab in tabList"
    >{{tab.name}}</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

interface ITabItem {
  id: string;
  name: string;
}
@Component({
  name: 'Tabs'
})
export default class Tabs extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private tabList!: ITabItem[];
  @Prop({
    type: String,
    required: true
  })
  private currentId!: string;
  onLoad() {}

  // 把点击事件的id传递给父组件
  @Emit('changeTabItem') private changeTabItem(id: string): void {}
  private handleEmitedTab(id: string): void {
    this.changeTabItem(id);
  }
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
