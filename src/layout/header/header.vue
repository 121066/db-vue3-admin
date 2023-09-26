<template>
    <div class="header">
        <div class="header_left">组件测试系统</div>
        <div class="header_right">
            <el-dropdown>
                <el-button link type="primary" class="btn"> 设置 </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <screenfull />
                        </el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-button class="btn" link type="primary">退出</el-button>
        </div>
    </div>
</template>
<script setup>
import screenfull from "@/components/screenfull/index.vue";

</script>
<style lang="scss">
.header {
    padding: 5px 10px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--theme-color);
    align-items: center;
    .header_left {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 400;
        line-height: 50px;
        font-size: 28px;
        font-family: alihan;
        vertical-align: middle;
    }
    .header_right {
        color: #fff;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 32px;
        .btn {
            color: #fff;
            margin: 0 5px;
        }
    }
}
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
.el-dropdown {
    line-height: 3;
}
::v-deep .el-dropdown:focus-visible {
    outline: none !important;
}
</style>