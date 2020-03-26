<template>
    <view class="entrance-content">
        <view class="entrance-item" v-for="(item,index) in entranceList" :key="index">
            <view class="entrance-icon"><view class="icon-image"></view></view>
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

        @Mutation('fishLan/setEntranceList') private setEntranceList!: any;

        @Action('fishLan/getEntranceData') private getEntranceData!: any;

        mounted(){
            this.getEntrance();
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
        font-size:12px;
        color:#333;
        padding: 5px;
        .entrance-item{
            width: 25%;
            margin-bottom: 6px;
            .entrance-icon{
                display:flex;
                justify-content: center;
            }
            .icon-image{
                height: 50px;
                width: 50px;
                background: #eee;
                border-radius: 25px;

            }
            .icon-name,.entrance-icon{
                padding: 5px 0px 0 0;
            }
        }
        
    }
</style>