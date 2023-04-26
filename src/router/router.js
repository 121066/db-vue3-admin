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
                    icon: 'ele-EditPen',
                },
            },
            {
                path: '/labels',
                name: 'labels',
                component: () => import('@/view/Labels/index.vue'),
                meta: {
                    title: '标签',
                    icon: 'ele-EditPen',
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
        ],
    },
];
