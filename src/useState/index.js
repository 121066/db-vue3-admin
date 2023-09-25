import { ref, watch } from 'vue';

export const useInitCount = (int) => {
    const count = ref(0);
    watch([int], ([newValue]) => {
        addFn(newValue);
    });
    const addFn = (value) => {
        count.value = value + 2;
    };
    return {
        count,
        addFn,
    };
};
