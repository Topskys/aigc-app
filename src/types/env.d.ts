/// <reference types="vite/client"/>

interface ImportMetaEnv {
  /**
   * 应用端口
   */
  VITE_APP_PORT: number;
  /**
   * 请求前缀
   */
  VITE_APP_PREFIX_API: string;
  /**
   * 服务器URL
   */
  VITE_APP_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
