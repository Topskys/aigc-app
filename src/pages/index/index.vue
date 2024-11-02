<template>
  <!-- 顶部导航栏 -->
  <view class="head-nav">
    <view class="head-empty-container" />
    <view class="menu-list text-[#9d9486]">
      <text v-for="item in menuList" :key="item" class="menu-item font-bold">{{ item }} </text>
    </view>
  </view>
  <!-- 空盒子顶开顶部导航栏覆盖内容 -->
  <view class="empty-container-height" />
  <!-- 中间内容区域 -->
  <view class="content-view">
    <!-- <start-page /> -->
    <!-- <chart-area /> -->
    <ai-drawing />
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
import { useGetMenuButtonInfo } from "@/hooks";
// import startPage from "./components/start-page.vue";
import chartArea from "./components/chart-area.vue";
import aiDrawing from "./components/ai-drawing.vue";

const { menuButtonInfo } = useGetMenuButtonInfo();
const { userInfo } = useUserStore();

console.log(menuButtonInfo);
const menuList = ref(["我的", "对话", "AI绘画"]);
</script>

<style lang="scss" scoped>
/* stylelint-disable-next-line selector-type-no-unknown */
page {
  background-color: #f3f3f3;
}

.head-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  height: v-bind("menuButtonInfo.bottom");
  background: linear-gradient(#fce7cc, #f3f3f3);

  .head-empty-container {
    height: v-bind("menuButtonInfo.top");
  }

  .menu-list {
    display: flex;
    align-items: center;
    height: v-bind("menuButtonInfo.height");
    padding-left: 20rpx;

    .menu-item:nth-child(2) {
      margin: 0 60rpx;
    }
  }
}

.empty-container-height {
  height: v-bind("menuButtonInfo.bottom");
  background: #f3f3f3;
}
</style>
