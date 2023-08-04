<template>
    <div>
        <el-tag
            v-for="tag in data.tags"
            :key="tag.name"
            class="mx-1"
            closable
            type="success"
        >
            {{ tag.name }}
        </el-tag>
        <div class="search">
            <span class="search_label">搜索</span>
            <!-- 搜索区域 -->
            <el-input
                placeholder="请输入关键字搜索"
                v-model="int.search"
                @focus="intFoucs"
                @blur="intBlur"
                :fetch-suggestions="querySearchAsync"
                @change="intChange"
                class="search_int"
                @input="inputChange"
            ></el-input>
            <!-- 下拉面板区域 -->
            <div class="search_list" v-if="searchFlag"></div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const int = reactive({
  search: '搜索',
  searchList: [],
  intList: []
})
const searchFlag = ref(false)
const data = reactive({
  tags: [{ id: 1, name: '标签', disabled: false }],
});
const intFoucs = () => {
  searchFlag.value = true
}
const intBlur = () => {
  searchFlag.value = false
}
const querySearchAsync = (e) => {
  console.log(e, 'eee')
}
const intChange = (e) => {
  console.log(e, 'shus')
}
const inputChange = (e) => {
  console.log(e, '输入')
  if (!e) return
  const int = int.searchList.filters(item => {
    return item.indexOf(e) === 1 ? item : ''
  })
  int.intList = int
}
</script>
<style lang="scss" scoped>
.search {
    margin: 16px;
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    transition: all 0.5s ease-in;
    .search_label {
        min-width: 40px;
    }
    .search_int {
    }
    .search_list {
        position: absolute;
        top: 40px;
        left: 0;
        height: 400px;
        background: red;
        width: 100%;
    }
}
</style>