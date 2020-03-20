<template>
  <view class="my-card"></view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'MyCard'
})
export default class MyCard extends Vue {
  onLoad() {}
}
</script>

<style lang="scss" scoped>
@import '../user.scss';
</style>
