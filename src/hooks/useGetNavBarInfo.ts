import { provide, ref } from "vue";

export interface INavBarInfo {
  statusBarHeight: number;
  customBarHeight: number;
  platform: string;
  // #ifdef MP-WEIXIN
  menuButtonInfo?: UniNamespace.GetMenuButtonBoundingClientRectRes;
  // #endif
}

export const NAV_BAR_INFO_KEY = "navBarInfo";

/**
 * 获取当前平台导航栏信息
 * 相关文献：
 * https://blog.csdn.net/f15080134412/article/details/136655718
 * https://zhuanlan.zhihu.com/p/640034537
 */
export const useGetNavBarInfo = () => {
  // 存储导航栏信息
  const navBarInfo = ref<INavBarInfo | null>(uni.getStorageSync(NAV_BAR_INFO_KEY));

  if (!navBarInfo.value) {
    uni.getSystemInfo({
      success: (result) => {
        // 获取手机状态栏高度、平台
        const { statusBarHeight = 0, platform } = result;
        let customBarHeight = 44; // 默认导航栏高度，单位px，可为H5、Android设置状态栏高度

        // #ifdef MP
        // 支持多平台编译
        customBarHeight = statusBarHeight + (platform === "ios" ? 44 : 48);
        // #endif

        // #ifdef MP-WEIXIN
        // 获取微信小程序胶囊按钮的位置信息
        const menuButtonInfo = uni.getMenuButtonBoundingClientRect()!;
        // 自定义导航栏高度 = 胶囊下距离 + 胶囊上距离 - 状态栏高度
        customBarHeight = menuButtonInfo.bottom + menuButtonInfo.top - statusBarHeight;
        // #endif

        navBarInfo.value = {
          statusBarHeight,
          customBarHeight,
          platform,
          // #ifdef MP-WEIXIN
          menuButtonInfo,
          // #endif
        };

        // 提供和存储导航栏信息
        // provide(NAV_BAR_INFO_KEY, navBarInfo.value); // 也可以使用globalData
        uni.setStorageSync(NAV_BAR_INFO_KEY, navBarInfo.value);
      },
    });
  }
  return { ...navBarInfo.value };
};

export default useGetNavBarInfo;
