<template>
    <view class="recomm-content">
         <view class="recomm-tab">
            <text class="recomm-title">推荐课程</text>
            <text class="recomm-more">更多</text>
         </view>
         <view class="recomm-item-panel">
            <view class="recomm-item" v-for="(item,index) in coursesList" :key="index">
                <view  class="recomm-item-image">
                    <image  :src="item.imageUrl" class="recomm-imge-z"></image>
                </view>
                <view class="recomm-item-info">
                    <text class="recomm-name">{{item.title}}</text>
                    <text class="recomm-des">{{item.des}}</text>
                    <text class="recomm-money">{{item.money}}/次</text>
                </view>
            </view>
         </view>
    </view>
</template>
<script lang="ts">
    import {Component, Vue } from "vue-property-decorator";
    import { State, Action,namespace} from "vuex-class";
    
    @Component
    export default class entrance extends Vue{

        @State(state => state.fishLan.coursesList) private coursesList!: string;

        @Action("getCourses", { namespace: "fishLan" })
		getCourses: any;

        mounted(){
            this.getCourses();
        }
    }
</script>
<style lang="scss">
    .recomm-content{
        padding: 22rpx;
        .recomm-title{
            font-size:34rpx;
            font-weight: 550;
            margin-bottom: 20rpx;
        }
        .recomm-tab{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            color:#333;
            .recomm-more{
                border: 1rpx solid #999;
                padding: 8rpx 12rpx;
                color:#999;
                border-radius: 8rpx;
                font-size: 26rpx;
            }
        }

        .recomm-item-panel{
            padding: 10rpx 0;
            .recomm-item{
                display:flex;
                height:180rpx;
                margin-bottom: 12px;
            }
            .recomm-item-image{
                width:280rpx;
                background:#eee;
            }
            .recomm-imge-z{
                width:100%;
                height:100%;
                object-fit: cover;
                border-radius: 4px;
            }
            .recomm-item-info{
                display: flex;
                flex-direction: column;
                text-align: left;
                flex: 1;
                font-size: 12px;
                color:#333;
                line-height: 40rpx;
                padding:  10rpx 0 10rpx 21rpx;
                .recomm-name{
                    font-size: 30rpx;
                    font-weight: 550;
                }
                .recomm-des{
                    color:#999;
                }
                .recomm-money{
                    display: flex;
                    flex:1;
                    align-items: flex-end;
                }
            }
        }
    }
</style>