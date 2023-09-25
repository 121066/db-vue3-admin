import { defineStore } from 'pinia'
export const useRoutesList = defineStore('routesList', {
    state: () => ({
        routesList: [],
        meta: '测试',
    }),
    actions: {
        async setRoutesList(data) {
            this.routesList = data
        },
    },
})
