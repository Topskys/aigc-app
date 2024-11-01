import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  // 添加忽略eslint检查的文件或目录
  {
    ignores: [
      "/dist",
      "/public",
      "/node_modules",
      "**/*.min.js",
      "**/*.config.mjs",
      "**/*.tsbuildinfo",
      "/src/manifest.json",
    ]
  },
  // 自定义规则
  {
    rules: {
      quotes: ["error", "double"], // 强制使用双引号
      "quote-props": ["error", "always"], // 强制对象的属性名使用引号
      semi: ["error", "always"], // 要求使用分号
      indent: ["error", 2], // 使用两个空格进行缩进
      "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
      "no-trailing-spaces": "error", // 不允许行尾有空格

      // TypeScript 规则
      "@typescript-eslint/no-explicit-any": "off", // 禁用 no-explicit-any 规则，允许使用 any 类型
      "@typescript-eslint/explicit-function-return-type": "off", // 不强制要求函数必须明确返回类型
      "@typescript-eslint/no-empty-interface": "off", // 禁用 no-empty-interface 规则，允许空接口声明
      "@typescript-eslint/no-empty-object-type": "off", // 允许空对象类型

      // Vue 规则
      "vue/multi-word-component-names": "off", // 关闭多单词组件名称的限制
      "vue/html-indent": ["error", 2], // Vue 模板中的 HTML 缩进使用两个空格
      "vue/no-v-html": "off", // 允许使用 v-html (根据实际项目需要)
    },
  },
];