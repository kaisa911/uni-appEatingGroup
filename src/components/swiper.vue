<template>
	<view class="swiper-panel">
		<!-- <button @click="emitTodo">测试</button> -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swiperData" :key="index">
				<image  :src="item.imageUrl" class="swiper-image"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts">
	import {Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
	import { State, Mutation, Action,namespace } from "vuex-class";

	@Component
	export default class swiper extends Vue{
		
		//-------以下两种方式都可以获取子模块下的mucation
		// @Mutation("setSwiperItem", { namespace: "fishLan" })
		// setSwiperItem: any;
		@Mutation('fishLan/setSwiperItem') private setSwiperItem!: Function;


		//相当于原来的prop 这里 !和可选参数?是相反的, !告诉TypeScript我这里一定有值.
		@Prop() swiperData: any;  

		//相当于原来的data
		private indicatorDots:boolean = true;
		private autoplay:boolean = true;
		private interval:number = 2000;
		private duration:number = 500;
		private addTest:number =1;
		
		
		// computed---------对于Vue中的计算属性,我们只需要将该计算属性名定义为一个函数,并在函数前加上get关键字即可.
		// 原本Vue中的computed里的每个计算属性都变成了在前缀添加get的函数.
		get ValA(){
            return this.autoplay;
		}

		//相当于emit
		// @Emit()不传参数,那么它触发的事件名就是它所修饰的函数名.
		// @Emit(name: string),里面传递一个字符串,该字符串为要触发的事件名.
		@Emit('handleEmit')
        private emitTodo(n: string){
			this.ValA;
			this.addTest = this.addTest + 2;
		}
		
		// watch 使用和emit 相似
		//相当于监听 addTest  onChildChanged为操作函数
		@Watch('addTest')
		onChildChanged(val: string, oldVal: string) { 
			console.log('监听',val);
		}

	}
</script>
<style lang="scss">
	.swiper-panel{
		.swiper-image{
			width:100%;
		}
	}
</style>
