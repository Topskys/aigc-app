import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig, type UserConfig, type ConfigEnv, loadEnv } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  const UnoCss = await import("unocss/vite").then((i) => i.default);
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      uni(),
      // https://github.com/unocss/unocss
      UnoCss(),
      // 自动导入
      AutoImport({
        imports: ["vue", "uni-app", "pinia"], // 自动导入 Vue 和 UniApp 的 API
        dts: "src/types/auto-imports.d.ts", // 自动生成类型声明文件
        eslintrc: {
          enabled: true, // 生成 ESLint 配置文件
          filepath: "./.eslintrc-auto-import.json", // ESLint 配置文件路径
        },
      }),
    ],
    // 开发环境配置
    server: {
      host: "0.0.0.0",
      port: +env.VITE_APP_PORT,
      open: true,
      // 反向代理配置
      proxy: {
        [env.VITE_APP_PREFIX_URL]: {
          target: env.VITE_APP_SERVER_URL, // 目标服务器
          changeOrigin: true, // 支持跨域
          rewrite: (path) => path.replace(new RegExp("^" + env.VITE_APP_PREFIX_URL), ""), // 去掉前缀
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
