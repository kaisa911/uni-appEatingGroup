<template>
    <view class="newUserCopon-panel" v-if="openOffers">
        <coupon  v-if="openOffers" :popupData="newUserOffers"></coupon>
    </view>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import coupon  from '../coupon.vue';

@Component({
    components:{
        coupon
    }
})
export default class newUserCopon extends Vue{
    private openOffers:boolean = false;
    private  newUserOffers:Object = {
		title: '恭喜您获得新手大礼包',
        amount: '5',
        amountDes: '5元立减劵',
        expirationDate: '2020-6.30',
        conditionDes:'满10元全门店课程可用',
    }
    
    // 新用户劵
	openOffersPopup(){
		this.openOffers = true;
	}

}
</script>