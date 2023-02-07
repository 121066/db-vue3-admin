import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
// https://vitejs.dev/config/

export default defineConfig((mode) => {
    const env = loadEnv(mode.mode, process.cwd());
    console.log(env, '???', process.cwd(), 'cwd?');
    return {
        plugins: [
            vue(),
            vueSetupExtend(),
            AutoImport({
                imports: ['vue', 'vue-router'],
            }),
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        //修改访问路径
        base: env.VITE_API_NAME,
        //配置代理
        server: {
            host: '127.0.0.1',
            //配置默认端口
            port: '8866',
            open: true, //是否自动打开浏览器
            proxy: {
                '/db': {
                    target: 'https://dbyxs.xyz:8002',
                    ws: true,
                    changeOrigin: true,
                },
            },
        },
        build: {
            outDir: 'lib',
            lib: {
                entry: resolve(__dirname, './src/lib/main.js'), //指定组件编译入口文件
                name: 'db-formsearch-plus',
                fileName: 'db-formsearch-plus',
            }, //库编译模式配置
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ['vue'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
    };
});
