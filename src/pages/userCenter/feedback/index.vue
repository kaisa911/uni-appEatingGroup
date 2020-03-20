<template>
  <view class="feedback">
    <view class="container">
      <text class='item-title'>意见与建议</text>
      <view class='content-suggestion'>
        <textarea class='input-suggestion' v-model="content" maxlength='500'></textarea>
        <view class='count-limit'>{{content.length}}/500</view>
      </view>
    
      <text class='item-title'>联系方式(选填)</text>
      <input class='input-email' v-model="contact" placeholder='请填写正确的手机号或邮箱' ></input>
      <view class='button' @click="handleSubmit">提交</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import request from '../../../utils/request';
import api from '../../../utils/api';
@Component({
  name: 'Feedback'
})
export default class Feedback extends Vue {
  private contact:string = '';
  private content:string = '';
  onLoad() {}
  private async handleSubmit():Promise<void> {
    if(!this.contact||!this.content){
      uni.showToast({ title:'请填写相关信息'});
      return;
    }
    const { code, data, msg } = await request.post(api.feedback, {
      contact:this.contact,
      content:this.content
    }, true)
    if(code!==200) {
       uni.showModal({
        title: '提示',
        content: msg
      });
      return;
    }
    uni.showToast({ 
      title:'反馈成功！',
      duration: 1500,
      success():void {
        setTimeout(()=>{
          uni.navigateBack();
        }, 500)
      }}
    );
   
  }
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
