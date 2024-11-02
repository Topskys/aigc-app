<template>
  <view class="start-page bg-white rounded-[5rpx] m-[20rpx] p-[20rpx]">
    <view class="greeting-text font-bold text-[40rpx]">你好，我是你的AI智能助手</view>
    <view class="introduce-text text-[#777a8d] line-height-[1.5] pt-[25rpx] pb-[25rpx]">
      我拥有丰富的知识，能帮你解答各种问题，还能帮你写文案、写代码、做表格，甚至帮你做PPT</view
    >
    <view class="question-init text-[#777a8d] flex items-center justify-between">
      <view class="question-text">你可以试着问我:</view>
      <view class="change-btn flex items-center" @click="randomData('02')">
        <image
          src="/static/huanyihuan.png"
          mode="widthFix"
          class="w-[30rpx] ml-[10rpx] mr-[10rpx]"
          :class="{ 'rotate-animation': isRotating }"
        />
        <text class="text-[#5a56d0]">换一换</text>
      </view>
    </view>
    <view class="default-questions grid grid-cols-2 gap-[20rpx] pt-[25rpx] pb-[25rpx]">
      <view
        v-for="(item, index) in problemList"
        :key="index"
        class="question-item rounded-[4rpx] p-[20rpx] bg-[#f7f8fc]"
      >
        <image :src="item.icon" mode="widthFix" class="w-[50rpx]" />
        <view class="text-[33rpx] pt-[10rpx] text-ellipsis-1">{{ item.title }}</view>
        <view class="text-ellipsis-2">{{ item.problem }}</view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import M1 from "@/static/start-page/m1.png";
import M2 from "@/static/start-page/m2.png";
import M3 from "@/static/start-page/m3.png";
import M4 from "@/static/start-page/m4.png";
import M5 from "@/static/start-page/m5.png";
import M6 from "@/static/start-page/m6.png";
import M7 from "@/static/start-page/m7.png";
import M8 from "@/static/start-page/m8.png";

const problemData = [
  {
    icon: M1,
    title: "农夫山泉新品上市策略",
    problem: "情分析近期农夫山泉新品上市的市场情况，并给出相应的营销策略",
  },
  {
    icon: M2,
    title: "如何评价《三体》？",
    problem: "请对《三体》进行评价，给出评价理由",
  },
  {
    icon: M3,
    title: "如何提高工作效率？",
    problem: "请给出提高工作效率的方法和技巧",
  },
  {
    icon: M4,
    title: "如何写一篇论文？",
    problem: "请给出写论文的步骤和注意事项",
  },
  {
    icon: M5,
    title: "如何制作PPT？",
    problem: "请给出制作PPT的技巧和注意事项",
  },
  {
    icon: M6,
    title: "如何写一篇作文？",
    problem: "请给出写作文的技巧和注意事项",
  },
  {
    icon: M7,
    title: "如何写一篇简历？",
    problem: "请给出写简历的技巧和注意事项",
  },
  {
    icon: M8,
    title: "如何写一篇论文？",
    problem: "请给出写论文的步骤和注意事项",
  },
];

const problemList = ref<{ icon: string; title: string; problem: string }[]>([]);
let isRotating = ref(false);

// 随机获取4个问题
const randomData = (type = "01", len = 4) => {
  // 防止多次点击
  if (isRotating.value) return;
  // 随机截取4个问题
  len = problemData.length > len ? len : problemData.length;
  problemList.value = [...problemData].sort(() => Math.random() - 0.5).slice(0, len);
  // 手动触发
  if (type === "02") {
    isRotating.value = true;
    setTimeout(() => {
      isRotating.value = false;
    }, 1000);
  }
};

// 页面加载时
onLoad(() => {
  randomData("01");
});
</script>

<style lang="scss" scoped>
.rotate-animation {
  transition: 1s;
  transform: rotate(360deg);
}
</style>
