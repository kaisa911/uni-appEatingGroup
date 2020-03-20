<template>
  <view class="my-coupon"></view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'MyCoupon'
})
export default class MyCoupon extends Vue {
  onLoad() {}
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
