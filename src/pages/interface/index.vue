<template>
	<view class="content">
    <image class="logo" src="../../static/logo.png"></image>
		<view>
      <text class="title">{{title}}</text>
      <text>{{nickname}}</text>
    </view>
	</view>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
@Component({})
export default class Idnex extends Vue{
  private　title:string  = 'interface'; //响应式属性
  private nickname:string = this.$store.state.nickname

	onLoad(){
		let a:string = '123'; 
	}			
}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
	.logo{
			height: 200upx;
			width: 200upx;
			margin-top: 200upx;
	}
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
