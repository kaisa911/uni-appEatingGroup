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
import swiper from './../../components/index/swiper.vue';
import entrance from './../../components/index/moduleEntrance.vue';
import recommCourses from './../../components/index/recommCourses.vue';
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
		this.isGetLocation();
		this.setOpenId();
	}

	// 1.登录获取cod 2.将code传给后端 3.后端调用auth.code2Session 4.后端返回openId等相关信息
	setOpenId(){
		uni.login({
			success (res) {
				if (res.code) {
					//发起网络请求
					uni.request({
						url: 'https://test.com/onLogin',
						data: {
							code: res.code
						},
						success: (res) => {
       		 				console.log('原本要在这里保存 openId的')
						}
					})

					uni.setStorage({
    					key: 'OpenID ',
    					data: 'afdsak21322432fdfsa32rqcsa3fa',				
					});
					uni.setStorage({
    					key: 'session_key ',
    					data: '23AS45MMffdsaffdsafas343',				
					});

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
					this.getLocationInfo()
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

	getUserInfo(){
		//获取用户信息
		uni.getUserInfo({
			provider: 'weixin',
			success:  (infoRes)=> {
			}
		});
	}

	//获取地理位置
	getLocationInfo(){
		uni.getLocation({
			type: 'wgs84',
			success (res:any) {
				let latitude,longitude;
				latitude = res.latitude.toString();
				longitude = res.longitude.toString();
				console.log(latitude,longitude)
			}
		});
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
