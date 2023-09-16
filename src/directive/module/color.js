const color = {
    beforeMount(el, binding) {
        if (!el) return;
        el.style.color = binding.value.color;
    },
    updated(el, binding) {
        // 实时更新最新的目标内容
        el.targetContent = binding.value;
    },
    unmounted(el) {
        el.removeEventListener('click', () => {});
    },
};
export default color;
