<template>
    <div class="side">
        <el-menu
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :unique-opened="true"
            background-color="transparent"
            text-color="#fff"
            :collapse-transition="true"
            :default-active="defaultActive"
            @close="handleClose"
        >
            <template v-for="item in menuList">
                <el-sub-menu
                    :index="item.path"
                    :key="item.path"
                    v-if="item.children && item.children.length"
                >
                    <template #title>
                        <SvgIcon :iconName="item?.meta?.icon || ''" />
                        <span>{{ item?.meta?.title || '' }}</span>
                    </template>
                    <subItem :chil="item.children" />
                </el-sub-menu>
                <template v-else>
                    <el-menu-item :index="item.path" :key="item.path">
                        <template #title>
                            <SvgIcon :iconName="item.meta.icon" />
                            <span>{{ item.meta.title }}</span>
                        </template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script setup>
// import { Homes } from '@/router/router.js'
import { useRoutesList } from '@/stores/routesList'
import { onMounted } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import subItem from './subItem.vue'
const store = useRoutesList()
const { routesList, meta } = storeToRefs(store)
const handleOpen = () => { }
const handleClose = () => { }
//获取菜单数据
const menuList = computed(() => {
  // return Homes[0].children
  return routesList.value
})
const defaultActive = computed(() => {
  let r = useRoute()
  return r.path
})
onMounted(() => {
  // console.log(routesList, '路由',meta)
  store.meta = '奥林'
})
</script>
<style lang="scss">
.side {
    width: 220px;
    background-color: var(--theme-side);
    position: absolute;
    // height: calc(100% - 70px);
    height: 100%;
    // border-radius: 3px;
}
.el-menu {
    border-right: solid 0px #fff !important;
}
</style>
