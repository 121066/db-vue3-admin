import { createApp } from 'vue'
import pinia from './stores'

import SvgIcon from '@/components/svgIcon.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import directive from './directive'
import { router } from './router'
import './style.css'
import './style/index.scss'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`ele-${key}`, component)
}
app.directive('dbyxs', (el, binding) => {
    // const e = el.querySelector('.el-input__wrapper');
    // e.querySelector('.el-input__inner').focus();
    const e = el.querySelector('input')
    el.style.background = 'red'
    if (!e) return
    e.focus()

    // console.log(binding.value.yax, '自定义指令属性');
})
app.directive('onsize', (el, binding) => {
    const map = new WeakMap()
    const ob = new ResizeObserver((entries) => {
        for (const iterator of entries) {
            const handler = map.get(iterator.target)
            if (handler) {
                handler({
                    width: iterator.contentRect.width,
                    heigth: iterator.contentRect.height,
                })
            }
        }
    })
    map.set(el, binding.value)
    ob.observe(el)
    //  mounted(el, binding) {
    //     map.set(el, binding.value);
    //     ob.observe(el);
    // }
    // unmounted(el) {
    //     ob.unobserve(el);
    // }
})
// app.directive('color', (el, binding) => {
//     if (!el) return;
//     el.style.color = binding.value.color;
// });
app.directive('value', (el, binding) => {
    if (!el) return
    el.innerHTML = binding.value.val
})
app.use(router)
app.use(directive)
app.component('SvgIcon', SvgIcon)
app.use(pinia).use(ElementPlus).mount('#app')
