<template>
  <view class="view-right">
    <view class="title">会员等级与权益</view>
    <view>一、会员等级说明</view>
    <view>1.什么是途牛"会员等级"方案？</view>
    <view>这是途牛为会员打造定制的一套回馈、增值奖励方案，会员级别越高享受的权益越多，更多的权益策略将在不断完善中，敬请期待。</view>
    <view>2.会员级别的升级标准是什么？</view>
    <view>
      <image src="../../static/image/table.png" style="width:100%" />
    </view>
    <view>3.会员等级规则</view>
    <view>1）升级成功后，会员级别会永久保留吗？</view>
    <view>会员的有效期是自升级后一年，级别过期后，我们会根据您过去一年的成长值，重新调整您的会员级别。</view>
    <view>2）会员级别的有效期限能延长吗？</view>
    <view>当会员级别到期后，如未能达到升级标准，但凡会员到期前12个月消费金额大于0元，则当前会员级别就可以顺延一年。</view>
    <view>3）我是钻石会员，会员级别到期后没达到延长升级条件，会如何降级？</view>
    <view>会员级别到期后，如果未能达到升级及延长有效期条件，将顺次下调一个会员级别（但最低只降到一星会员），同时按照下调日更新会员级别有效期。</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'ViewRight'
})
export default class ViewRight extends Vue {
  onLoad() {}
}
</script>

<style lang="scss" scoped>
@import '../userCenter/user.scss';
</style>
