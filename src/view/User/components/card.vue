<template>
    <div>
        子组件

        <h1>{{ user.userName.name }}</h1>
    </div>
</template>
<script setup>
const user = inject('userName');
const init = (val) => {
    console.log(user, '我执行了', val);
};

defineExpose({
    init,
    user,
});
</script>