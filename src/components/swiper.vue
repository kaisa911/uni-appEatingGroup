<template>
	<view class="swiper-panel">
		<!-- <button @click="emitTodo">测试</button> -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image  :src="item.imageUrl" class="swiper-image"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts">
	import {Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
	import { State, Mutation, Action,namespace } from "vuex-class";

	// 获取模块中的state
	const fishLanMutation = namespace('fishLan', Mutation);

	@Component
	export default class swiper extends Vue{
		
		//vuex 中获取store
		@State(state => state.fishLan.swiperList) private swiperList!: string;
		
		//-------以下两种方式都可以获取子模块下的mucation
    	// @fishLanMutation  setSwiperItem:any;
		@Mutation('fishLan/setSwiperItem') private setSwiperItem!: any;


		@Action('fishLan/setSwiper') private setSwiper!: any;

		//相当于原来的prop 这里 !和可选参数?是相反的, !告诉TypeScript我这里一定有值.
		// @Prop(Number) propA!: number;
        // @Prop({default: 'default value'}) propB!: string;
		// @propC([String, Boolean]) propC: string | boolean;
		// @Prop()
		// private Index!: number;
		// @Prop(String)
		// private propA!:string;
		// @Prop([String,Number])
		// private propB!:string|number;
		// @Prop({ default: false, type: Boolean }) radio!: boolean;
		@Prop(Number) swiperData!: number;  

		//相当于原来的data
		indicatorDots:boolean = true;
		autoplay:boolean = true;
		interval:number = 2000;
		duration:number = 500;
		addTest:number =1;
		
		
		// computed---------对于Vue中的计算属性,我们只需要将该计算属性名定义为一个函数,并在函数前加上get关键字即可.
		// 原本Vue中的computed里的每个计算属性都变成了在前缀添加get的函数.
		get ValA(){
			console.log('我是测试 999 test cumputed')
            return this.autoplay;
		}

		//相当于emit
		// @Emit()不传参数,那么它触发的事件名就是它所修饰的函数名.
		// @Emit(name: string),里面传递一个字符串,该字符串为要触发的事件名.
		@Emit('handleEmit')
        private emitTodo(n: string){
			this.ValA;
			this.addTest = this.addTest + 2;
            console.log('怪怪的');
		}
		
		// watch 使用和emit 相似
		//相当于监听 addTest  onChildChanged为操作函数
		@Watch('addTest')
		onChildChanged(val: string, oldVal: string) { 
			console.log('监听',val);
		}

		mounted() {
			this.setSwiper();
		}

	}
</script>
<style lang="scss">
	.swiper-panel{
		.swiper-image{
			width:100%;
			height:100%;
		}
	}
</style>
