<template>
	<view class="index-page">
		<swiper @handleEmit="handleEmit" :swiperData="swiperList"></swiper>
		<entrance></entrance>
		<recommCourses></recommCourses>
		<newUserCoupon ref="newUserCopon"></newUserCoupon>
	</view>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import { State, Mutation,Action } from "vuex-class";
import swiper from './../../components/swiper.vue';
import entrance from './../../components/index/moduleEntrance.vue';
import recommCourses from './../../components/index/recommCourses.vue';
import newUserCoupon  from './../../components/index/newUserCoupon.vue';
@Component({
	components:{
		swiper,
		entrance,
		recommCourses,
		newUserCoupon 
	}
})
export default class Idnex extends Vue{
	private　title:string  = 'myTitle'; //响应式属性;
	@State('nickname') private stateNickname!: string;
	@State(state => state.fishLan.swiperList) private swiperList!: string;
	@Action('fishLan/setOpenId') private setOpenId!: any;
	@Action('fishLan/getBannerData') private getBannerData!: Function;


	onLoad(){
		this.getBannerData();
		this.isGetLocation();
		this.getOpenId();
	}

	// 1.登录获取cod 2.将code传给后端 3.后端调用auth.code2Session 4.后端返回openId等相关信息
	getOpenId(){
		uni.login({
			success :(res)=> {
				if (res.code) {
					this.setOpenId()
				}
			}
		})
	}

	//判断是有获取地理位置的权限
	isGetLocation(){
		uni.getSetting({
		    success: (res) =>{					 
				if (!res.authSetting['scope.userLocation']) { 
					this.setAuthorizeInfo()
				}else{
					this.getLocationInfo();
					let vm:any = this.$refs.newUserCopon;
					vm.openOffersPopup();
				}
			}
		});
	}
	
	//设置授权
	setAuthorizeInfo(){
		uni.authorize({
			scope: 'scope.userLocation',
			success:()=> {
				this.getLocationInfo();
				let vm:any = this.$refs.newUserCopon;
				vm.openOffersPopup();
			},
			fail(){
				uni.showModal({
					showCancel: false,
					title: '温馨提示',
					content: '手动授权',
					success: function (res) {
						uni.openSetting()
					}
				});
			}
		})
	}

	//获取地理位置
	getLocationInfo(){
		uni.getLocation({
			type: 'wgs84',
			success (res:any) {
				let latitude,longitude;
				latitude = res.latitude.toString();
				longitude = res.longitude.toString();
			}
		});
	}

	handleEmit(argument:any){
	}
}
</script>

<style>
	.index-page {
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
