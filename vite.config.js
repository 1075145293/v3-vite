import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'; // vant 按需加载
import { VantResolver } from 'unplugin-vue-components/resolvers'; // vant 按需加载
import eslintPlugin from 'vite-plugin-eslint' // eslint插件
import postCssPxToRem from 'postcss-pxtorem' // rem插件
import {visualizer} from "rollup-plugin-visualizer"; // 打包显示文件大小
import { loadEnv } from 'vite' // 获取env 变量
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'
import path from 'path';
export default ({ mode }) => {
  const plugins = [];
  let env = loadEnv(mode, process.cwd()).VITE_NAME
  if (env === "production") {
    // 生产环境加入打包文件分析
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }
  return defineConfig({
    server: {
      port: 9999,
      host: '127.0.0.1'
    },
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      }
    },
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
      }),
      manualChunksPlugin(),
      ...plugins
    ],
    css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/assets/styles/var.scss";' // 配置全局scss 变量
        }
      },
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 37.5, // 1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          })
        ]
      }
    }
  })
}
