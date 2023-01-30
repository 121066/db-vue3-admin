import { createApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from '@/components/svgIcon.vue'
import './style.css'
import './style/index.scss'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`ele-${key}`, component)
}
app.component('SvgIcon',SvgIcon)
app.use(pinia).use(ElementPlus).use(router).mount('#app')
