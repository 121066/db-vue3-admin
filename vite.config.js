import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
// https://vitejs.dev/config/

export default defineConfig((mode)=>{
  const env=loadEnv(mode.mode,process.cwd())
  console.log(env,'???',process.cwd(),'cwd?')
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
    base:env.VITE_API_NAME,
    //配置代理
    server:{
      host:'127.0.0.1',
      //配置默认端口
      port:'8866',
      open:true,//是否自动打开浏览器
      proxy:{
        '/db':{
          target:'https://dbyxs.xyz:8002',
          ws:true,
          changeOrigin:true,
        }
      }
    }
  }
})
