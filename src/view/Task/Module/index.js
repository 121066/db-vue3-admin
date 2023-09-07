const map = new WeakMap();
const ob = new ResizeObserver((entries) => {
    for (const iterator of entries) {
        const handler = map.get(iterator.target);
        if (handler) {
            handler({
                width: iterator.contentRect.width,
                heigth: iterator.contentRect.height,
            });
        }
    }
});
export default {
    mounted(el, binding) {
        map.set(el, binding.value);
        ob.observe(el);
    },
    unmounted(el) {
        ob.unobserve(el);
    },
};
