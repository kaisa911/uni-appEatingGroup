<template>
    <uni-popup ref="popup" type="center">
        <view class="popup-panel">
            <view class="popup-title">
                <text class="title">{{popupData.title}}</text>
                <icon type="clear" size="30" @click="closeDialog"/>
            </view>
            <view class="popup-content">
                <view  class="Voucher-AB">
                    <view class="Voucher-A">
                        <text>{{popupData.amountDes}}</text><text>有效期至{{popupData.expirationDate}}</text>
                    </view>
                    <view class="Voucher-B">￥{{popupData.amount}}</view>
                </view>
                <view class="condition-des">{{popupData.conditionDes}}</view>
            </view>
            <view class="popup-btn"> 
                <view class="btn" @click="closeDialog">立即领取</view>
            </view>  
        </view>
    </uni-popup>                                        
</template>
<script lang="ts">
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue';
import { Component,Vue,Prop } from "vue-property-decorator";
    //优惠劵弹框
@Component({
	components:{
		uniPopup
	}
})
export default class coupon  extends Vue{
    @Prop() 
    private popupData:object={
        title: null,
        amount: null,
        amountDes: null,
        expirationDate: null,
        conditionDes: null,
    };
    
    mounted() {
        this.openDialog();
    }

    public openDialog():void{
        let el:any = this.$refs.popup;
		el.open();
    }

    public closeDialog():void{
        let el:any = this.$refs.popup;
		el.close();
    }
}
</script>
<style scoped lang="scss">
    .popup-panel{
        background: #fff;
        padding:10px;
        border-radius: 6px;
        .popup-title{
            padding:10px;
            font-size: 20px;
            .title{
                margin-right: 20px;
                color: #333;
            }
        }

        .popup-content{
            text-align: left;
            padding: 0 10px;
            font-size: 14px;
            .Voucher-AB{
                display: flex;
                align-items: center;
                justify-content: space-between;
               
            }
            .Voucher-A{
                display: flex;
                flex-direction: column;
                width: 70%;
                padding: 10px;
                border-radius: 5px;
                background: #DEB887;
            }
            .Voucher-B{
                font-size:28px;
                color: red;
                font-weight: 550;
            }

            .condition-des{
                padding: 5px 0 15px 5px;
            }
            
        }

        .popup-title{
            display: flex;
            align-items: center;
        }

        .popup-btn{
            display: flex;
            justify-content: center;

        }

        .btn{
            width:70%;
            border:2px solid #991;
            height: 36px;
            line-height: 36px;
            background: #fff;
            border-radius: 20px;
            opacity: 0.8;
        }
    }
</style> 
