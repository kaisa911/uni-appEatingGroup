<template>
    <view class="entrance-content">
        <view class="entrance-item" v-for="(item,index) in entranceList" :key="index" @click="navigateTo">
            <view class="entrance-icon"><view class="icon-image"><image class="icon-image entrance-image" :src="item.imageUrl"></image></view></view>
            <view class="icon-name">{{item.name}}</view>
        </view>
    </view>
</template>
<script lang="ts">
    import {Component, Vue } from "vue-property-decorator";
    import { State, Mutation, Action} from "vuex-class";
    
    @Component
    export default class entrance extends Vue{
        @State(state => state.fishLan.entranceList) private entranceList!: string;

        @Mutation('fishLan/setEntranceList') private setEntranceList!: Function;

        @Action('fishLan/getEntranceData') private getEntranceData!: Function;

        mounted(){
            this.getEntrance();
        }

        navigateTo(){
        }
        
        private async getEntrance(){
            let res = await this.$store.dispatch("fishLan/getEntranceData", {});
            if(res.code === 200){
                this.setEntranceList(res.data);
            }else{
                uni.showModal({
                    title: '提示',
                    content: res.msg
                });
            }
        }
    }
</script>
<style lang="scss">
    .entrance-content{
        display: flex;
        flex-wrap: wrap;  
        font-size:26rpx;
        color:#333;
        padding: 10rpx;
        .entrance-item{
            width: 25%;
            margin-bottom: 10rpx;
            .entrance-icon{
                display:flex;
                justify-content: center;
            }
            .icon-image{
                height: 120rpx;
                width: 120rpx;
                background: #eee;
                border-radius: 75rpx;

            }
            .entrance-image{
                object-fit: cover;
                height:100%;
            }
            .icon-name,.entrance-icon{
                padding: 8rpx 0px 0 0;
            }
        }
        
    }
</style>