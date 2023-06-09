import { createApp } from 'vue';
import pinia from './stores';

import SvgIcon from '@/components/svgIcon.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import { router } from './router';
import './style.css';
import './style/index.scss';
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`ele-${key}`, component);
}
app.directive('dbyxs', (el, binding) => {
    console.log(el, '自定义指令');
    // const e = el.querySelector('.el-input__wrapper');
    // e.querySelector('.el-input__inner').focus();
    const e = el.querySelector('input');
    el.style.background = 'red';
    if (!e) return;
    e.focus();

    // console.log(binding.value.yax, '自定义指令属性');
});
app.directive('color', (el, binding) => {
    if (!el) return;
    el.style.color = binding.value.color;
});
app.directive('value', (el, binding) => {
    if (!el) return;
    el.innerHTML = binding.value.val;
});
app.component('SvgIcon', SvgIcon);
app.use(pinia).use(ElementPlus).use(router).mount('#app');
