<template>
  <view class="my-card">
    <Tabs
      :currentId="currentId"
      :tabList="tabList"
      @changeTabItem="changeTabItem"
    ></Tabs>
    <scroll-view class="scroll-Y" scroll-y="true">
      <view :key="card.id" v-for="(card,index) in cardList">
        <card-item :cardInfo="card" @toRightPage="toRightPage"></card-item>
      </view>
    </scroll-view>
    <view @click="handleToBuyCard" class="buy-card">购卡</view>
  </view>
</template>

<script lang="ts">
import Tabs from '../components/tab.vue';
import CardItem from '../components/cardItem.vue';
import { Component, Vue } from 'vue-property-decorator';
import request from '../../../utils/request';
import api from '../../../utils/api';

interface ICardItem {
  id: number;
  cardName: string;
  balance: number;
  money: number;
  hasActive: boolean;
  cardScale: string;
  activeTime: string;
}

@Component({
  name: 'MyCard',
  components: {
    Tabs,
    CardItem
  }
})
export default class MyCard extends Vue {
  private tabList: Global.ITabItem[] = [
    { id: '1', name: '我的卡包' },
    { id: '2', name: '过期卡' }
  ];
  private currentId: string = '1';
  private cardList: ICardItem[] = [];
  private pageNum: number = 1;
  private pageSize: number = 10;

  onLoad() {}
  onShow() {
    this.fetchCardList(this.currentId);
  }

  // 变更tab
  private changeTabItem(id: string): void {
    this.currentId = id;
    this.cardList = [];
    this.fetchCardList(this.currentId);
  }

  // 获取卡列表
  private async fetchCardList(type: string): Promise<void> {
    const { code, data, msg } = await request.post(api.getMyCard, {
      pageSize: this.pageSize,
      pageNum: this.pageNum,
      type
    });
    if (code !== 200) {
      uni.showModal({
        title: '提示',
        content: msg
      });
      return;
    }
    const list: ICardItem[] = [...this.cardList];
    this.cardList = [...list, ...data.myCard];
  }
  // 查看权益
  private toRightPage(id: number): void {
    uni.navigateTo({
      url: '/pages/viewRight/index?id=' + id
    });
  }
  // 购卡
  handleToBuyCard(): void {
    uni.navigateTo({
      url: '/pages/viewRight/index'
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
