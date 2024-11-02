<template>
  <view class="personal modal-backdrop">
    <view class="personal-center bg-white">
      <view class="user-info justify-center items-center flex-col">
        <image src="/static/logo.png" mode="aspectFill" class="w-[90rpx] h-[90rpx] rounded-[50%]" />
        <view class="nickname">昵称</view>
      </view>
      <text class="new-dialogue">开启新对话</text>
      <text class="history">历史对话</text>
      <!-- 历史对话列表 -->
      <scroll-view scroll-y type="list" enhance class="scroll-y">
        <view
          v-for="item in 10"
          :key="item"
          class="history-item flex items-center justify-between m-[20rpx] p-[20rpx] rounded-[20rpx] bg-white"
        >
          <text class="history-title text-ellipsis-1 flex-1"
            >历史对话标题00000000000000000000000000000000000000000000000000000000000000</text
          >
          <text class="created-at text-[20rpx] color-[#999]">2024-11-1 10:00</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { useGetMenuButtonInfo } from "@/hooks";

const { menuButtonInfo } = useGetMenuButtonInfo();
</script>
<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: v-bind("menuButtonInfo.bottom");
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);

  .personal-center {
    position: fixed;
    top: v-bind("menuButtonInfo.bottom");
    right: 0;
    bottom: 0;
    left: -80%;
    // left: 0;
    width: 80%;
    animation: slideInFromLeft 0.5s ease-in-out forwards;

    @keyframes slideInFromLeft {
      from {
        left: -80%;
      }

      to {
        left: 0;
      }
    }

    .nickname {
      margin-top: 20rpx;
      font-size: 32rpx;
      font-weight: bold;
    }

    .user-info {
      padding: 30rpx 0;
    }

    .new-dialogue {
      margin: 45rpx 20rpx;
    }

    .history {
      margin: 30rpx 20rpx;
      border-bottom: 1px solid rgba(218, 218, 218, 0.6);
    }
  }

  .scroll-y {
    height: 800rpx;
  }
}
</style>
