<template>
    <div>数字增加</div>
</template>
<script setup>
const handleCount = () => {
    const ctx = document.querySelector('.num');
    animation(500, 0, 500, (val) => {
        ctx.textContent = val;
    });
    function animation(duration, from, to, onProgress) {
        const dis = to - from;
        const speed = dis / duration;
        const startTime = Date.now();
        let value = to;
        function _run() {
            const now = Date.now();
            const time = now - startTime;
            if (time >= duration) {
                value = to;
                onProgress(value);
                return;
            }
            const d = time * speed;
            value = from + d;
            onProgress(value);
            requestAnimationFrame(_run);
        }
        requestAnimationFrame(_run);
    }
};
</script>