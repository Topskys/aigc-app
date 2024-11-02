<script setup lang="ts">
import { useGetMenuButtonInfo } from "@/hooks";

onLaunch(() => {
  // 获取微信小城胶囊按钮的信息
  useGetMenuButtonInfo();
});
</script>
<style>
/* 公共样式 */
view,
text {
  font-size: 32rpx;
}

Image {
  display: block;
}

button {
  /* 去掉 button 默认样式 */
  /* all: unset; */
}
</style>
