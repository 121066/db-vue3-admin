<template>
    <div>
        数字增加
        {{ data.num }}
    </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';

// const props = defineProps({
//     count: {
//         type: Number,
//         default: 0,
//     },
// });

// let data = ref(0);
let data = reactive({
  num: 0
})
onMounted(() => {
  handleCount();
});

let handleCount = () => {
  //   const ctx = document.querySelector('.num');
  animation(500, 0, 500, (val) => {
    // ctx.textContent = val;
    data.num = val.toFixed(0);
  });
  function animation (duration, from, to, onProgress) {
    const dis = to - from;
    const speed = dis / duration;
    const startTime = Date.now();
    let value = to;
    function _run () {
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