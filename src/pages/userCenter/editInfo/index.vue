<template>
  <view class="edit-info">
    <view class="container">
      <view class="edit-info change-name">
        <view class="info-desc">昵称</view>
        <input
          class="info-frame"
          placeholder="请填写您的昵称"
          placeholder-style="color:#b9b9b9;font-size:28rpx;"
          type="text"
          v-model="userInfo.name"
        />
        <view class="nav-arrow"></view>
      </view>
      <view class="edit-info change-gender">
        <picker
          :range="genderList"
          @change="handleChangeGender"
          mode="selector"
        >
          <view class="picker-frame picker">
            性别：
            <text>{{userInfo.gender}}</text>
          </view>
        </picker>
        <view class="pnav-arrow"></view>
      </view>
      <view class="edit-info change-gender">
        <picker
          :range="heightArray"
          @change="handleChangeHeight"
          mode="selector"
        >
          <view class="picker-frame picker">
            身高：
            <text>{{userInfo.height}}cm</text>
          </view>
        </picker>
        <view class="pnav-arrow"></view>
      </view>
      <view class="edit-info change-gender">
        <picker
          :range="weightArray"
          @change="handleChangeWeight"
          mode="selector"
        >
          <view class="picker-frame picker">
            体重：
            <text>{{userInfo.weight}}kg</text>
          </view>
        </picker>
        <view class="pnav-arrow"></view>
      </view>
      <view class="edit-info change-birthdate">
        <picker @change="handleChangeBirthday" mode="date">
          <view class="picker-frame picker">
            生日：
            <text>{{userInfo.birthday}}</text>
          </view>
        </picker>
        <view class="pnav-arrow"></view>
      </view>
      <view class="edit-info change-name">
        <view class="info-desc">手机号</view>
        <input
          class="info-frame"
          placeholder="请填写您的手机号"
          placeholder-style="color:#b9b9b9;font-size:28rpx;"
          type="text"
          v-model="userInfo.phone"
        />
        <view class="nav-arrow"></view>
      </view>

      <button @click="handleSubmit" class="save-btn">保存</button>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import request from '../../../utils/request';
import api from '../../../utils/api';

interface IEditInfo {
  name: string;
  gender: string;
  height: number;
  weight: number;
  birthday: string;
  phone: string;
}

@Component({
  name: 'EditInfo'
})
export default class EditInfo extends Vue {
  private heightArray: number[] = [];
  private weightArray: number[] = [];
  private genderList: string[] = ['女', '男'];
  private userInfo: IEditInfo = {
    name: '',
    gender: '',
    height: 0,
    weight: 0,
    birthday: '',
    phone: ''
  };
  onLoad() {
    for (let i = 140; i < 230; i++) {
      this.heightArray.push(i);
    }
    for (let i = 40; i < 100; i += 5) {
      this.weightArray.push(i);
    }
  }
  onShow() {
    this.handleGetUserInfo();
  }

  // 获取用户要编辑的信息
  private async handleGetUserInfo(): Promise<void> {
    const { code, data, msg } = await request.post(api.getEditInfo, {}, true);
    if (code !== 200) {
      uni.showModal({
        title: '提示',
        content: msg
      });
      return;
    }
    this.userInfo = data;
  }
  // 更改性别
  private handleChangeGender(event: any): void {
    this.userInfo.gender = this.genderList[event.detail.value];
  }
  // 更改身高
  private handleChangeHeight(event: any): void {
    this.userInfo.height = this.heightArray[event.detail.value];
  }
  // 更改体重
  private handleChangeWeight(event: any): void {
    this.userInfo.weight = this.weightArray[event.detail.value];
  }
  //变更生日
  private handleChangeBirthday(event: any): void {
    this.userInfo.birthday = event.detail.value;
  }
  // 提交信息
  private async handleSubmit(): Promise<void> {
    let flag: boolean = false;
    Object.values(this.userInfo).forEach(item => {
      if (!item) {
        flag = true;
      }
    });
    // 有未填写的报错
    if (flag) {
      uni.showModal({
        title: '提示',
        content: '请完整填写个人信息'
      });
      return;
    }
    const { code, data, msg } = await request.post(
      api.submitEditInfo,
      this.userInfo,
      true
    );
    if (code !== 200) {
      uni.showModal({
        title: '提示',
        content: msg
      });
      return;
    }
    uni.showToast({
      title: '修改个人信息成功！',
      duration: 1500,
      success(): void {
        setTimeout(() => {
          uni.navigateBack();
        }, 500);
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
