<template>
    <view class="payorder-page">
        <view class="curse-title">{{courserInfo.title}}</view>
        <view class="order-panel">
            <view class="order-item"><text>门店：</text><text>{{courserInfo.store}}</text></view>
            <view class="order-item"><text>教练：</text><text>{{courserInfo.coach}}</text></view>
            <view class="order-item"><text>时间：</text><text>{{courserInfo.time}}</text></view>
            <view class="order-item"><text>人数：</text><text>{{courserInfo.personNum}}</text></view>
            <view class="order-item"><text>总价：</text><text>{{courserInfo.money}}</text></view>
            <view class="order-item"><text>优惠劵：</text><text>10张优惠劵可用</text></view>
            <view class="Tips">
                <text>温馨提示</text>
                <li>1.提供更衣室，储物柜，卫生间</li>
                <li>2.请提前到场</li>
            </view>
        </view>
       <view class="pay-btn">
           <view>实付: {{price}}</view>
           <text class="btn">立即预约</text>
       </view>
    </view>
</template>
<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import { State, Mutation,Action } from "vuex-class";

@Component({
})
export default class payOrder extends Vue{
    private price:number = 0;

    @State(state => state.courseDetails.curseInfo) private courserInfo!: any;

    @Action('courseDetails/getCourseById') private getCourseById!: Function;

    // onLoad(options:any){
    //     this.getCourseById({id:options.id});//课程详情
    // }
    onLoad(){
        this.getCourseById({id:1});//课程详情
       
    }
    mounted() {
        this.price = this.courserInfo.money;
    }
}
</script>
<style lang="scss">
.payorder-page{
    .curse-title{
        font-size:40rpx;
        color: #333;
        height: 80rpx;
        line-height: 80prx;
        // font-weight: 600;
        padding: 20rpx 30rpx;
        border-bottom: 4rpx solid #eee;
    }
    .order-panel{
        color: #333;
        font-size: 32rpx;
        display:flex;
        flex-direction: column;
        .Tips{
            padding:  30rpx;
            font-size: 34rpx;
            line-height: 60rpx;
            li{
                color: #333;
                line-height: 60rpx;
                font-size:30rpx;
            }
        }
        .order-item{
            padding: 0 30rpx;
            display: flxe;
            display: inline-flex;
            justify-content: space-between;
            justify-items: space-between;
            border-bottom: 4rpx solid #eee;
            height: 80rpx;
            line-height: 80rpx;
        }
    }

    .pay-btn{
        width: 100%;
        height: 120rpx;
        background:	#333;
        color: #fff;
        position: fixed;
        bottom: 0;
        text-align: center;
        line-height: 120rpx;
        font-size:46rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn{
            margin: 0  40rpx 0 0;
            width: 200rpx;
            color:	#333;
            padding: 10rpx 20rpx;
            border-radius: 40rpx;
            height: 60rpx;
            line-height: 60rpx;
            background: #fff;
        }
    }
}

</style>