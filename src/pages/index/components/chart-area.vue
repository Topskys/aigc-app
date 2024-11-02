<template>
  <view class="chart-area bg-white">
    <view
      class="user-message inline-block bg-[#20c57d] rounded-[4rpx] p-[15rpx] color-white mt-[30rpx] ml-[20rpx] mr-[20rpx]"
    >
      用户发送的内容</view
    >
    <view
      class="response-message p-[15rpx] rounded-[4rpx] text-[#333] mt-[30rpx] ml-[20rpx] mr-[20rpx]"
    >
      <text>这是ai回答的内容</text>
      <Loading />
      <!-- 联网查询的数据 -->
      <view>
        <text
          class="recommend-tips bg-[#f3f3f3] rounded-[10rpx] mt-[20rpx] mb-[20rpx] p-[15rpx] font-bold"
          >我还为你推荐以下内容</text
        >
        <view class="recommend-content rounded-[10rpx] p-[15rpx]">
          <view class="recommend-item mb-[15rpx] color-[#006c45]" />
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import Loading from "./loading.vue";
</script>
