import { reactive } from "vue";

type MenuButtonInfo = {
  /**
   * 小程序胶囊菜单按钮的高度
   */
  height: string;
  /**
   * 小程序胶囊菜单按钮的上边界坐标
   */
  top: string;
  /**
   * 小程序胶囊菜单按钮的下边界坐标
   */
  bottom: string;
};

/**
 * 获取微信小程序胶囊按钮信息
 */
export const useGetMenuButtonInfo = () => {
  // 存储微信小程序胶囊按钮信息
  let menuButtonInfo = reactive<MenuButtonInfo>({
    height: "0px",
    top: "0px",
    bottom: "0px",
  });
  // 从本地缓存获取胶囊按钮信息
  const menuButtonInfoStorage = uni.getStorageSync("menuButtonInfo");
  if (!menuButtonInfoStorage) {
    // 从接口获取胶囊按钮信息并设置缓存
    const { height, top, bottom } = uni.getMenuButtonBoundingClientRect();
    menuButtonInfo = {
      height: height + "px",
      top: top + "px",
      bottom: bottom + 10 + "px",
    };
    uni.setStorageSync("menuButtonInfo", menuButtonInfo);
  } else {
    menuButtonInfo = menuButtonInfoStorage;
  }

  return {
    menuButtonInfo,
  };
};

export default useGetMenuButtonInfo;
