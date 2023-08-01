<template>
    <div>
        {{ data.num }}
    </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';

const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 500
  }
});

// let data = ref(0);
let data = reactive({
  num: props.count
})
onMounted(() => {
  handleCount();
});

let handleCount = () => {
  //   const ctx = document.querySelector('.num');
  animation(props.duration, 0, props.count, (val) => {
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