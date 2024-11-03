<template>
  <!-- 顶部导航栏 -->
  <view class="head-nav" :style="{ height: customBarHeight! * 2 + 'rpx' }">
    <view class="head-empty-container" :style="{ height: headEmptyHeight }" />
    <view class="menu-list text-[#9d9486]" :style="{ height: menuListHeight }">
      <text v-for="item in menuList" :key="item" class="menu-item font-bold">{{ item }} </text>
    </view>
  </view>
  <!-- 空盒子顶开顶部导航栏覆盖内容 -->
  <view class="empty-container-height" :style="{ height: customBarHeight! * 2 + 'rpx' }" />
  <!-- 中间内容区域 -->
  <view class="content-view">
    <start-page />
    <!-- <chart-area /> -->
    <!-- <ai-drawing /> -->
    <!-- <input-area /> -->
    <!-- <personal /> -->
    <!-- <login /> -->
  </view>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useUserStore } from "@/store/modules/user";
import startPage from "./components/start-page.vue";
import chartArea from "./components/chart-area.vue";
import aiDrawing from "./components/ai-drawing.vue";
import inputArea from "./components/input-area.vue";
import personal from "../personal/index.vue";
import login from "../login/index.vue";
import { useGetNavBarInfo } from "@/hooks";

const { userInfo } = useUserStore();
const { customBarHeight, menuButtonInfo } = useGetNavBarInfo();

const menuList = ref(["我的", "对话", "AI绘画"]);

const computedWXHeight = (type: string, height: string = "auto") => {
  // #ifdef MP-WEIXIN
  height = (menuButtonInfo as any)[type] * 2 + "rpx";
  // #endif
  return height;
};

const headEmptyHeight = computed(() => {
  return computedWXHeight("top", "33rpx");
});

const menuListHeight = computed(() => {
  return computedWXHeight("height");
});
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
  background: linear-gradient(#fce7cc, #f3f3f3);

  .head-empty-container {
    height: 33rpx;
  }

  .menu-list {
    display: flex;
    align-items: center;
    padding-left: 20rpx;

    .menu-item:nth-child(2) {
      margin: 0 60rpx;
    }
  }
}

.empty-container-height {
  background: #f3f3f3;
}
</style>
