<template>
  <view class="chart-area bg-white">
    <view
      class="user-message inline-block bg-[#20c57d] rounded-[4rpx] p-[15rpx] color-white mt-[30rpx] ml-[20rpx] mr-[20rpx]"
      >用户发送的内容</view
    >
    <view
      class="response-message p-[15rpx] rounded-[4rpx] text-[#333] mt-[30rpx] ml-[20rpx] mr-[20rpx]"
    >
      <text>这是ai回答的内容</text>
      <Loading />
    </view>
  </view>
</template>
<script setup lang="ts">
import Loading from "./loading.vue";
</script>

<style lang="scss" scoped>
.rotate-animation {
  transition: 1s;
  transform: rotate(360deg);
}
</style>
