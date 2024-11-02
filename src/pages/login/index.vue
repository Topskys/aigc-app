<template>
  <view class="login-page bg-white">
    <image src="/static/login.png" mode="scaleToFill" class="w-[100%] mt-[110rpx]" />
    <view class="font-bold pt-[40rpx] pb-[40rpx] pl-[20rpx] pr-[20rpx]">登录体验更多AI功能</view>
    <view class="login-view flex-col items-center">
      <button
        class="avatar-wrapper w-[150rpx] h-[150rpx] rounded-[50%] p-0"
        open-type="chooseAvatar"
        @chooseavatar="onChooseAvatar"
      >
        <image class="avatar w-[150rpx] h-[150rpx] rounded-[50%]" :src="avatarUrlValue" />
      </button>
      <form class="form w-[100%]">
        <input type="nickname" class="weui-input" placeholder="请输入昵称" />
        <!-- <input type="password" placeholder="请输入密码" class="input" /> -->
        <button form-type="submit" class="form-submit-btn">登录</button>
      </form>
    </view>
  </view>
</template>
<script setup lang="ts">
const avatarUrlValue = ref<string>("/static/avatar.png");
const onChooseAvatar = (e: any) => {
  avatarUrlValue.value = e.detail.avatarUrl;
};
</script>
<style lang="scss" scoped>
.login-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
}

.form-submit-btn {
  display: block;
  padding: 15rpx 0;
  margin: 55rpx 20rpx 0 20rpx;
  background: linear-gradient(to right, #a2c5fe, #c0e7fd);
}

.weui-input {
  // all: unset;
  padding: 20rpx;
  margin: 20rpx;
  border-bottom: 1rpx solid #f2f2f2;
}
</style>
