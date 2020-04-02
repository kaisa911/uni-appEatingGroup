<template>
    <view class="courseDetails-page">
        <swiper :swiperData="swiperList"></swiper>
        <uni-list >
            <!-- <uni-list-item :show-arrow="false" class="course-pro" ><text>小团课</text></uni-list-item> -->
            <uni-list-item title="优惠价格：$68" :show-arrow="false"></uni-list-item>
            <uni-list-item title="地址：汶水路"  badge-text="12"></uni-list-item>
            <uni-list-item title="门店：静安门店"  :show-arrow="false" badge-text="12"></uni-list-item>
            <uni-list-item title="时间：2020/4/2"  :show-arrow="false" badge-text="12"></uni-list-item>
        </uni-list>
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
    @Action('fishLan/getBannerData') private getBannerData!: Function;
    private lists:[] = [];

    onLoad(){
        this.getBannerData();
    }
}
</script>
<style lang="scss">
 .courseDetails-page{
     .course-pro{
        //  display: flex;
         
     }
 }
</style>