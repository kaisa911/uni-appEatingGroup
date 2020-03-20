<template>
  <view class="user-center">
    <user-info
      :userInfo="userInfo"
      @handleBuyCard="handleBuyCard"
      @handleEditInfo="handleEditInfo"
      @handleViewRight="handleViewRight"
    ></user-info>
    <my-posscession
      :userInfo="userInfo"
      @handleToPossession="handleToPossession"
    ></my-posscession>
    <nav-list :navList="navList" @handleToPages="handleToPages"></nav-list>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import NavList from './components/navList.vue';
import MyPosscession from './components/possession.vue';
import UserInfo from './components/userInfo.vue';
import userMixin from './userMixin';
import request from '../../utils/request';
import api from '../../utils/api';

@Component({
  name: 'UserCenter',
  mixins: [userMixin],
  components: {
    NavList,
    MyPosscession,
    UserInfo
  }
})
export default class Idnex extends Vue {
  private title: string = 'myTitle'; //响应式属性
  private userInfo: Global.IUserInfo = {
    id: '',
    name: '',
    avatar: '',
    calorie: 0,
    level: 0,
    levelScore: 0,
    nextLevel: 0,
    balance: 0,
    myOrder: 0,
    cardName: '贵宾卡'
  };
  private navList = [
    { name: '我的优惠券', url: '' },
    { name: '运动记录', url: '' },
    { name: '消费记录', url: '' },
    { name: '关于FITLIFE', url: '' },
    { name: '客服反馈', url: '' },
    { name: '服务条款', url: '' }
  ];

  onLoad() {
    this.getUserInfo();
  }

  async onShow() {
    await this.getUserInfo();
  }

  // 获取用户信息
  private async getUserInfo(): Promise<undefined> {
    const { code, msg, data } = await request.post(api.getUserInfo, {});
    if (code !== 200) {
      uni.showModal({
        title: '提示',
        content: msg
      });
      return;
    }
    this.$set(this, 'userInfo', data.userInfo);
  }
  // 跳转到相关页面
  private handleToPages(url: string): void {
    console.log(url);
  }
  // 跳转到卡包，预约，兑换券页
  private handleToPossession(index: number): void {
    console.log(index);
  }

  // 编辑信息
  private handleEditInfo(): void {}
  // 购卡
  private handleBuyCard(): void {}
  // 查看权益
  private handleViewRight(): void {}
}
</script>

<style lang="scss" scoped>
@import './user.scss';
</style>
