<template>
  <view id="user-center">
    <view>
      <text class="title">{{title}}</text>
      <text class="title">{{stateNickname}}</text>
    </view>
    <nav-list :navList="navList" @handleToPages="handleToPages"></nav-list>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import NavList from './navList.vue';
import userMixin from './userMixin';
import request from '../../utils/request';
import api from '../../utils/api';

@Component({
  name: 'UserCenter',
  mixins: [userMixin],
  components: {
    NavList
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
    cardName: ''
  };
  private navList = [
    { name: '我的优惠券', url: '' },
    { name: '运动记录', url: '' },
    { name: '关于FITLIFE', url: '' },
    { name: '消费记录', url: '' },
    { name: '客服反馈', url: '' },
    { name: '服务条款', url: '' }
  ];

  onLoad() {}

  onShow() {
    this.getUserInfo();
  }

  // 获取用户信息
  private getUserInfo = async () => {
    const { code, msg, data } = await request.post(api.getUserInfo, {});
    if (code !== 200) {
      uni.showModal({
        title: '提示',
        content: msg
      });
      return;
    }
    this.userInfo = data;
  };
  // 跳转到相关页面
  handleToPages(url: string): void {
    console.log(url);
  }
}
</script>

<style lang="scss">
@import './user.scss';
</style>
