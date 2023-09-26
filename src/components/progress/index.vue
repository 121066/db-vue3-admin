<template>
    <div class="progress">
        <div class="progress_bg">
            <div
                class="progress_bg_w"
                :style="{
                    width: `${props.progress}%`,
                    background: `${props.color}`,
                }"
            ></div>
        </div>
        <span>{{ props.progress }}%</span>
    </div>
</template>
<script setup name="progressitem">
const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: 'red',
  },
});
</script>
<style lang="scss" scoped>
.progress {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    span {
        margin-left: 8px;
        font-size: 12px;
        color: #999;
    }
}
.progress_bg {
    width: 100%;
    height: 4px;
    background: rgb(235, 238, 245);
    border-radius: 3px;
    position: relative;
}
.progress_bg_w {
    position: absolute;
    height: 4px;
    border-radius: 3px;
    transition: width 1s ease-in-out;
    animation: p1 1s 1;
}
@keyframes p1 {
    0% {
        width: 0%;
    }
}
</style>