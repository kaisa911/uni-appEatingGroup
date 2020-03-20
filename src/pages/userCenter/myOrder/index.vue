<template>
  <view class="my-order"></view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'MyOrder'
})
export default class MyOrder extends Vue {
  onLoad() {}
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
