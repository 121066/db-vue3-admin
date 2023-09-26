import { defineStore } from 'pinia'
export const useAuthority = defineStore('authority', {
    state: () => ({
        rule: [
            {
                name: 'admin',
                password: '123456',
                age: '30',
                rule: '',
                id: new Date().getTime(),
            },
        ],
        authName: '',
    }),
    actions: {
        setRule(val) {
            this.rule.push(val)
        },
        updateRule(val) {
            this.rule.forEach((item) => {
                if (item.id === val.id) {
                    Object.assign(item, val)
                }
            })
        },
        deleteRule(val) {
            this.rule.splice(val, 1)
        },
    },
    getters: {
        getRule() {
            return this.rule
        },
    },
})
