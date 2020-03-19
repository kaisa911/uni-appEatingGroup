<template>
	<view class="content">
		<swiper @handleEmit="handleEmit"></swiper>
		<entrance></entrance>
		<recommCourses></recommCourses>
		<!-- <view>
      		<text class="title">{{title}}</text>
      		<text class="title">{{stateNickname}}</text>
    	</view> -->
	</view>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import swiper from './../../components/swiper.vue';
import entrance from './../../components/moduleEntrance.vue';
import recommCourses from './../../components/recommCourses.vue';
@Component({
	components:{
		swiper,
		entrance,
		recommCourses
	}
})
export default class Idnex extends Vue{
	private　title:string  = 'myTitle'; //响应式属性
	@State('nickname') private stateNickname!: string;
	@Mutation('change') private CHANGENICKNAME!: Function;


	onLoad(){
		let a:string = '123'; 
		this.CHANGENICKNAME('10');
		console.log(' 1111')
	}
	
	handleEmit(argument:any){
		console.log('我有点懵啊',argument)
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
