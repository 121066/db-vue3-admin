import { defineStore } from 'pinia'
export const useDictionary = defineStore('dictionary', {
    state: () => ({
        dict: [],
        dictObj: {},
    }),
    actions: {
        setDict(data, type) {
            let init = this.dictObj[type] || []
            this.dictObj[type] = [...init, ...data]
        },
        setDictContent(data, type) {
            let initData = JSON.parse(JSON.stringify(data))
            this.dictObj[type] = initData.list || []
            this.dict.push(initData)
        },
    },
    getters: {
        getDict(type) {
            return this.dictObj[type]
        },
        getDictList() {
            return this.dict
        },
    },
})
