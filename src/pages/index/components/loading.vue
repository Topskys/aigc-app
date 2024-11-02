<template>
  <view class="circle-list flex items-center pt-[20rpx] pb-[20rpx]">
    <text class="circle" />
    <text class="circle" />
    <text class="circle" />
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.circle {
  width: 18rpx;
  height: 18rpx;
  background-color: #777a8d;
  border-radius: 50%;
  animation: colorChange 1s linear infinite;

  &:first-child {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    margin: 0 10rpx;
    animation-delay: 0.33s;
  }

  &:last-child {
    animation-delay: 0.67s;
  }
}

/* 关键帧动画 */
@keyframes colorChange {
  0% {
    background-color: #ffcc00;
  }

  66.67% {
    background-color: #ffcc00;
  }

  33.33% {
    background-color: #ffcc00;
  }
}
</style>
