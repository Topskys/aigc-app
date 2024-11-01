import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  // 确保 token 是响应式的
  const token = ref<string>(uni.getStorageSync("token") || "");
  const userInfo = ref<any>({ username: "李四" });

  const login = (data: any) => {
    // TODO: 请求登录逻辑
    uni.setStorageSync("token", token.value);
  };

  // 获取用户信息
  const getUserInfo = async () => {
    // TODO: 请求获取用户信息逻辑
    userInfo.value = {
      username: "张三",
    };
  };

  // 登出
  const logout = async () => {
    // TODO: 请求登出逻辑
    token.value = ""; // 清空 token
    uni.removeStorageSync("token"); // 从本地缓存移除 token
  };

  return {
    token,
    userInfo,
    login,
    getUserInfo,
    logout,
  };
});
