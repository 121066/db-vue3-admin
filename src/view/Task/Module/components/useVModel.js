export function useVMode(props, propName, emit) {
    const cacheMap = new WeakMap();
    return computed({
        get() {
            if (cacheMap.has(props[propName])) {
                return cacheMap.get(props[propName]);
            }
            const propx = new Proxy(props[propName], {
                get(target, key) {},
                set(target, key, value) {
                    emit('update:' + propName, {
                        ...target,
                        [key]: value,
                    });
                    return true;
                },
            });
            cacheMap.set(props[propName], propx);
            return propx;
        },
        set(value) {
            emit('update:' + propName, value);
        },
    });
}
