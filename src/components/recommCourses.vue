<template>
    <view class="recomm-content">
         <view class="recomm-tab">
            <text class="recomm-title">推荐课程</text>
            <text class="recomm-more">更多</text>
         </view>
         <view class="recomm-item-panel">
            <view class="recomm-item" v-for="(item,index) in coursesList" :key="index">
                <view  class="recomm-item-image">

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

    // 获取模块中的state
	const fishLanAction = namespace('fishLan', Action);
    
    @Component
    export default class entrance extends Vue{

        @State(state => state.fishLan.coursesList) private coursesList!: string;

        @fishLanAction  setCourses!:Function;


        mounted(){
            this.setCourses();
        }
    }
</script>
<style lang="scss">
    .recomm-content{
        padding: 15px;
        .recomm-title{
            font-size:16px;
            font-weight: 550;
        }
        .recomm-tab{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            color:#333;
            .recomm-more{
                border: 1px solid #999;
                padding: 2px 5px;
                color:#999;
                border-radius:3px;
            }
        }

        .recomm-item-panel{
            padding: 10px 0;
            .recomm-item{
                display:flex;
                height:100px;
                margin-bottom: 10px;
            }

            .recomm-item-image{
                width:150px;
                background:#eee;
            }

            .recomm-item-info{
                display: flex;
                flex-direction: column;
                text-align: left;
                flex: 1;
                font-size: 12px;
                color:#333;
                line-height: 20px;
                padding:  10px;
                .recomm-name{
                    font-size: 16px;
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