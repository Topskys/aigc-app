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

/* 文本省略号 */
.text-ellipsis-1 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.text-ellipsis-2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
