<template>
    <scroll-view class="course-list-panel">
       <view v-for="(item,index) in courselist" :key="index" class="course-item">
           <view class="course-image"><image src="item.imageUrl"></image></view>
           <view class="course-content">
                <text class="course-title">{{item.title}}</text>
                <text class="line">{{item.tiem}}</text>
                <text class="line">{{item.personNum}}人课程</text>
                <view class="line">
                    <text v-for="(proName,index) in item.pro" :key="index" class="pro-item">{{proName}}</text>
                </view>
           </view>
           <view class="course-statu">
               <text v-if="item.status === 0">可预约</text>
               <text v-else-if="item.status === 1">满人可排队</text>
               <text v-else-if="item.status === 2">报名已结束</text>
            </view>
       </view>
    </scroll-view>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import { State, Mutation, Action,namespace} from 'vuex-class'

@Component({
})
export default class courseList extends Vue{
    @State(state => state.course.courselist) private courselist!:[]
    
    scroll(){
    }
}
</script>
<style lang="scss">
    .course-list-panel{
        padding: 20rpx;
        .course-item{
            display: flex;
            border-bottom: 4rpx solid #eee;
            color: #331;
            font-size: 24rpx;
            margin-bottom: 15rpx;
            .course-image{
                width: 180rpx;
                height: 180rpx;
                background: #eee;
            }
            .course-content{
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 10rpx;
                .line{
                    height: 40rpx;
                }
                .course-title{
                    font-size:28rpx;
                }
                .pro-item{
                    padding: 2px 4px;
                    background:#D3D3D3;
                    margin-right: 5px;
                }
            }
            .course-statu{
                width: 140rpx;
                display: flex;
                align-items: center;
                justify-items: center;
                justify-content: center;
                padding: 20px;
                text{
                    border-radius: 12px;
                    padding: 5px;
                    background: #eee;

                }
            }
        }
    }
</style>