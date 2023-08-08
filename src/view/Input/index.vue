<template>
    <div class="int">
        <h3>应用场景:需要动态判断输入内容长度</h3>
        <div class="int_top">
            <el-input
                placeholder="请输入"
                style="width: 400px; max-width: 400px"
                v-model="int.search"
                class="int_top_search"
                @focus="focusFlag = true"
                @blur="focusFlag = false"
            ></el-input>
            <div class="int_top_text">
                <div class="int_top_text_maske">{{ int.search }}</div>
                <div class="int_span" :class="focusFlag ? 'focus_span' : ''">
                    输入框长度400px
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const focusFlag = ref(false)
const int = reactive({
  search: ''
})
</script>
<style lang="scss" scoped>
.int {
    width: 100%;
    height: 100%;
    .int_top {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        .int_top_text {
            display: flex;
            flex-direction: row;
            position: absolute;
            flex: 1;
            width: 100%;
            align-items: center;
            .int_top_text_maske {
                z-index: -1;
            }
            .int_span {
                z-index: 10;
                margin-left: 12px;
            }
        }
        .int_top_search {
            z-index: 10;
        }
    }
    .focus_span {
        position: absolute;
        left: 400px;
    }
    .int_top:hover .int_span {
        position: absolute;
        left: 400px;
        color: red;
    }
}
::v-deep .el-input__inner {
    border-color: transparent !important;
}
::v-deep .el-input__wrapper {
    box-shadow: none;
}
.int_top:hover ::v-deep .el-input__wrapper {
    box-shadow: 0 0 0 1px #bbb;
}
</style>