<template>
    <view class="courseDetails-page">
        <swiper :swiperData="swiperList"></swiper>
        <view class="courseDetails-content">
            <view class="courseName">{{courserInfo.title}}</view>
            <uni-list >
                <!-- <uni-list-item :show-arrow="false" class="course-pro" ><text>小团课</text></uni-list-item> -->
                <uni-list-item :title="'优惠价格:'+ courserInfo.title" :show-arrow="false"></uni-list-item>
                <uni-list-item :title="'地址：'+courserInfo.address"  badge-text="12"></uni-list-item>
                <uni-list-item :title="'门店：'+courserInfo.store"  :show-arrow="false" badge-text="12"></uni-list-item>
                <uni-list-item :title="'时间：'+courserInfo.time"  :show-arrow="false" badge-text="12"></uni-list-item>
            </uni-list>

        </view>
        <view class="commmit-panel" @click="commit">提交</view>
    </view>
</template>
<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import { State, Mutation,Action } from "vuex-class";

import swiper from './../../components/swiper.vue';
import uniList from "@dcloudio/uni-ui/lib/uni-list/uni-list.vue"
import uniListItem from "@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue"

@Component({
    components:{
        swiper,
        uniList,
        uniListItem
    }
})
export default class courseDetails extends Vue{
    @State(state => state.fishLan.swiperList) private swiperList!: string;
    @State(state => state.courseDetails.curseInfo) private courserInfo!: object;

    @Action('fishLan/getBannerData') private getBannerData!: Function;
    @Action('courseDetails/getCourseById') private getCourseById!: Function;

    onLoad(options:any){
        this.getBannerData();
        this.getCourseById({id:options.id});//课程详情
    }

    commit(){
        uni.navigateTo({
            url: '/pages/payOrder/index?id='+1
        });
    }
}
</script>
<style lang="scss">
.courseDetails-page{
    .courseName{
        height: 100rpx;
        color: #333;
        font-weight: 600;
        line-height: 100rpx;
    }
    .commmit-panel{
        width: 100%;
        height: 120rpx;
        background:	#333;
        color: #fff;
        position: fixed;
        bottom: 0;
        text-align: center;
        line-height: 120rpx;
        font-size:46rpx;
    }
}
</style>