import { onMounted, onUnmounted } from 'vue';

function getMenu(x, y, container) {
    const x = ref(0);
    const y = ref(0);
    const showMenu = ref(false);
    const openMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        showMenu.value = true;
        x.value = e.clientX;
        y.value = e.clientY;
    };
    function closeMenu() {
        showMenu.value = false;
    }
    onMounted(() => {
        container.addEventListener('contextmenu', openMenu);
        window.addEventListener('click', closeMenu, true);
        window.addEventListener('contextmenu', closeMenu, true);
    });
    onUnmounted(() => {
        container.removeEventListener('contextmenu', openMenu);
    });
}
