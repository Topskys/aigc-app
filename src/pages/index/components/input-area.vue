<template>
  <view class="input-box-area">
    <image
      :src="`/static/${exchange ? 'yuyin' : 'jianpan'}.png`"
      mode="widthFix"
      class="image"
      @click="exchange = !exchange"
    />
    />
    <view v-show="exchange" class="input-view">
      <textarea
        placeholder="你有什么想问的，快来问我！"
        :show-confirm-bar="false"
        fixed
        maxlength="500"
        cursor-spacing="20"
        :auto-height="textareaVal.autoHeight"
        @linechange="onLineChange"
      />
    </view>
    <view v-show="!exchange" class="speech-sound">按住说话</view>
    <image src="/static/fasong.png" mode="widthFix" class="image" />
  </view>
  <!-- 录制语音弹窗 -->
  <view class="mask-view" />
  <view class="record-text">语音转的文字</view>
  <view class="recording-pop-up">
    <text class="release">松开发送</text>
    <text class="in-recognition">正在识别声音...</text>
    <view class="audio-waves">
      <text
        v-for="(item, i) in audioWaves"
        :key="i"
        class="audio-wave"
        :style="{ animationDelay: item }"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";

const instance = getCurrentInstance();
const exchange = ref(true);
const textareaVal = reactive({
  autoHeight: true,
  alignItems: "center",
  height: "0rpx",
});
const textareaParentHeight = ref("");
// 音频波浪动画数据
const audioWaves = ref([
  "0.1s",
  "0.9s",
  "0.8s",
  "0.7s",
  "0.6s",
  "0.5s",
  "0.4s",
  "0.3s",
  "0.2s",
  "0.1s",
  "0.1s",
  "0.9s",
  "0.8s",
  "0.7s",
  "0.6s",
  "0.5s",
  "0.4s",
  "0.3s",
  "0.2s",
  "0.1s",
]);

// 输入框换行时触发
const onLineChange = (e: any) => {
  const { lineCount, height } = e.detail;
  textareaVal.alignItems = lineCount >= 2 ? "flex-end" : "center";
  if (lineCount >= 6) {
    textareaVal.autoHeight = false;
    textareaVal.height = height + "rpx";
  } else {
    textareaVal.autoHeight = true;
  }
};

// 获取textarea父级的高度
onMounted(() => {
  const query = uni.createSelectorQuery().in(instance);
  query
    .select(".input-view")
    .boundingClientRect((res: any) => {
      textareaParentHeight.value = res.height + "px";
    })
    .exec();
});
</script>

<style scoped lang="scss">
.input-box-area {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: v-bind("textareaVal.alignItems");
  padding-top: 20rpx;
  padding-bottom: 68rpx;
  background-color: #f8f8f8;

  .input-view {
    flex: 1;
    width: 100%;
    padding: 10rpx;
    background-color: white;
    border-radius: 15rpx;

    textarea {
      width: 100%;
      height: v-bind("textareaVal.height");
    }
  }

  .image {
    width: 47rpx;
    margin: 0 20rpx;
  }

  .speech-sound {
    flex: 1;
    height: v-bind("textareaParentHeight");
    line-height: v-bind("textareaParentHeight");
    color: white;
    text-align: center;
    background: linear-gradient(to right, #a2c5fe, #c0e7fd);
    border-radius: 15rpx;
  }
}

.mask-view {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
}

.record-text {
  position: fixed;
  right: 10rpx;
  bottom: 500rpx;
  left: 10rpx;
  z-index: 1000;
  height: 300rpx;
  padding: 10rpx;
  overflow: auto;
  line-height: 1.4;
  color: white;
}

.recording-pop-up {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500rpx;
  font-size: 40rpx;
  font-weight: bold;
  color: white;
  background: linear-gradient(to right, #07d280, #16cbdc);

  .release {
    padding: 30rpx 0;
    margin-bottom: 20rpx;
    font-size: 33rpx;
  }

  .in-recognition {
    padding: 30rpx 0;
    font-size: 40rpx;
  }

  .audio-waves {
    padding-top: 50rpx;

    .audio-wave {
      display: inline-block;
      width: 7rpx;
      height: 10rpx;
      margin: 0 5rpx;
      background-color: white;
      border: none;
      border-radius: 5rpx;
      animation: wave 0.2s ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    @keyframes wave {
      from {
        transform: scaleY(1);
      }

      to {
        transform: scaleY(4);
      }
    }
  }
}
</style>
