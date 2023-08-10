export const Home = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        meta: {
            title: '首页',
            icon: 'ele-OfficeBuilding',
        },
        // component: () => import('@/view/Home/index.vue'),
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/view/Home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'ele-OfficeBuilding',
                },
            },
        ],
    },
    {
        path: '/setting',
        name: 'setting',
        meta: {
            title: '设置',
            icon: 'ele-Setting',
        },
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/setting',
                name: 'setting',
                component: () => import('@/view/Setting/index.vue'),
                meta: {
                    title: '设置',
                    icon: 'ele-Setting',
                },
            },
        ],
    },

    {
        path: '/user',
        name: 'user',
        meta: {
            title: '用户',
            icon: 'ele-OfficeBuilding',
        },
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/user',
                name: 'user',
                component: () => import('@/view/User/index.vue'),
                meta: {
                    title: '用户',
                    icon: 'ele-OfficeBuilding',
                },
            },
        ],
    },
    {
        path: '/goods',
        name: 'goods',
        component: () => import('@/view/Goods/index.vue'),
        meta: {
            title: '商品',
            icon: 'ele-Setting',
        },
    },
];
export const Homes = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        meta: {
            title: '首页',
            icon: 'ele-OfficeBuilding',
        },
        // component: () => import('@/view/Home/index.vue'),
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/view/Home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'ele-OfficeBuilding',
                },
            },
            {
                path: '/table',
                name: 'table',
                component: () => import('@/view/Table/index.vue'),
                meta: {
                    title: '表格',
                    icon: 'ele-EditPen',
                },
            },
            {
                path: '/date',
                name: 'date',
                component: () => import('@/view/Date/index.vue'),
                meta: {
                    title: '日期',
                    icon: 'ele-Date',
                },
            },
            {
                path: '/task',
                name: 'task',
                meta: {
                    title: '任务',
                    icon: 'ele-OfficeBuilding',
                },
                component: () => import('@/view/Task/index.vue'),
            },
            {
                path: '/setting',
                name: 'setting',
                meta: {
                    title: '设置',
                    icon: 'ele-Setting',
                },
                children: [
                    {
                        path: '/setting/index',
                        name: 'setting',
                        component: () => import('@/view/Setting/index.vue'),
                        meta: {
                            title: '设置',
                            icon: 'ele-Setting',
                        },
                    },
                ],
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('@/view/User/index.vue'),
                meta: {
                    title: '用户',
                    icon: 'ele-OfficeBuilding',
                },
            },
            {
                path: '/goods',
                name: 'goods',
                component: () => import('@/view/Goods/index.vue'),
                meta: {
                    title: '商品',
                    icon: 'ele-Setting',
                },
            },
            {
                path: '/editor',
                name: 'editor',
                component: () => import('@/view/Editor/index.vue'),
                meta: {
                    title: '富文本',
                    icon: 'ele-FolderRemove',
                },
            },
            {
                path: '/labels',
                name: 'labels',
                component: () => import('@/view/Labels/index.vue'),
                meta: {
                    title: '标签',
                    icon: 'ele-Compass',
                },
            },
            {
                path: '/progress',
                name: 'progress',
                component: () => import('@/view/Progress/index.vue'),
                meta: {
                    title: '进度',
                    icon: 'ele-Orange',
                },
            },
            {
                path: '/countup',
                name: 'countup',
                component: () => import('@/view/CountUp/index.vue'),
                meta: {
                    title: '数字',
                    icon: 'ele-GoldMedal',
                },
            },
            {
                path: '/input',
                name: 'input',
                component: () => import('@/view/Input/index.vue'),
                meta: {
                    title: '输入框',
                    icon: 'ele-EditPen',
                },
            },
            {
                path: '/text',
                name: 'text',
                component: () => import('@/view/Text/index.vue'),
                meta: {
                    title: '文字显示',
                    icon: 'ele-EditPen',
                },
            },
        ],
    },
];
