<script setup lang="ts">
import { useGetNavBarInfo } from "@/hooks";
import { onLaunch, onError, onUnhandledRejection, onPageNotFound, onExit } from "@dcloudio/uni-app";

onLaunch(() => {
  // 初始化
  useGetNavBarInfo(); // 亦可使用 getApp().globalData
});

// 监听应用报错
onError(() => {});
// 监听未处理的Promise错误
onUnhandledRejection(() => {});
// 路由找不到
onPageNotFound(() => {});
// 监听应用退出
onExit(() => {});
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
