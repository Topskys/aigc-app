<template>
  <!-- 生成风格 -->
  <view class="style-title p-[20rpx]"> 生成风格 </view>
  <scroll-view
    scroll-x
    scroll-with-animation
    enable-passive
    class="scroll-x whitespace-nowrap h-[130rpx]"
  >
    <view
      v-for="(item, index) in styleList"
      :key="index"
      :class="{ 'style-selected': index === selectedIndex }"
      class="style-content h-[130rpx] w-[130rpx] ml-[20rpx] inline-flex items-center justify-center"
    >
      <view class="style-list position-relative" @click="selectedIndex = index">
        <image
          :src="item.icon"
          mode="aspectFill"
          class="w-[110rpx] h-[110rpx] rounded-[15rpx] position-relative"
        />
        <text
          :style="{ backgroundColor: item.color }"
          class="position-absolute left-0 bottom-0 right-0 text-[22rpx] rounded-bl-[15rpx] rounded-br-[15rpx] pt-[5rpx] pb-[5rpx] text-center color-white"
          >{{ item.style }}</text
        >
      </view>
    </view>
  </scroll-view>
  <!-- 画面关键词 -->
  <view class="keyword-title pt-[50rpx] pl-[20rpx] pr-[20rpx] pb-[20rpx]">画面关键词</view>
  <view class="textarea-view mr-[20rpx] ml-[20rpx] rounded-[15rpx] p-[10rpx] bg-white">
    <textarea
      :show-confirm-bar="false"
      placeholder="请输入画面描述，如一位古风女子，身穿汉服，舞剑，背景是樱花树，画面风格为油画。"
      class="textarea w-[100%] line-height-[1.4] bg-white"
    />
  </view>
  <!-- 生成效果 -->
  <view class="creative-tips text-center p-[20rpx] color-[darkorange] font-bold line-height-[1.5]"
    >AI正在绘制中...</view
  >
  <view class="result-image ml-[20rpx] mr-[20rpx]">
    <image src="/static/logo.png" mode="widthFix" class="w-[100%] rounded-[5rpx]" />
  </view>
  <!-- 提交生成按钮 -->
  <button class="submit-creation">生成图片</button>
</template>
<script setup lang="ts">
const styleList = ref([
  {
    icon: "/static/fengge/001.png",
    style: "无风格",
    color: "#1f9be5",
  },
  {
    icon: "/static/fengge/002.png",
    style: "卡通",
    color: "#1f9be6",
  },
  {
    icon: "/static/fengge/003.png",
    style: "二次元",
    color: "#1f9be8",
  },
  {
    icon: "/static/fengge/004.jpg",
    style: "手绘",
    color: "#1f9be9",
  },
  {
    icon: "/static/fengge/005.png",
    style: "油画",
    color: "#1f9be0",
  },
  {
    icon: "/static/fengge/006.png",
    style: "水彩",
    color: "#1f9be1",
  },
  {
    icon: "/static/fengge/007.png",
    style: "素描",
    color: "#1f9be2",
  },
  {
    icon: "/static/fengge/008.png",
    style: "素描",
    color: "#1f9be3",
  },
  {
    icon: "/static/fengge/009.png",
    style: "素描",
    color: "#1f9be4",
  },
]);

let selectedIndex = ref(0);
</script>

<style lang="scss" scoped>
.style-content:last-child {
  margin-right: 20rpx;
}

.style-selected {
  box-sizing: border-box;
  border: 4rpx solid #e23256;
  border-radius: 15rpx;
}

.submit-creation {
  position: fixed;
  right: 20rpx;
  bottom: 68rpx;
  left: 20rpx;
  padding: 20rpx 0;
  background: linear-gradient(to right, #a2c5fe, #c0e7fd);
  border-radius: 40rpx;
}
</style>
