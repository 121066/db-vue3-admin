import { defineStore } from 'pinia'
export const useAuthority = defineStore('authority', {
    state: () => ({
        rule: [{ name: 'admin', password: '123456' }],
        authName: '',
    }),
    actions: {
        setRule(val) {
            this.rule.push(val)
        },
    },
    getters: {
        getRule() {
            return this.rule
        },
    },
})
