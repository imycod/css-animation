import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import("@/layout/home.vue"),
        children: [
            {
                path: 'home',
                component: () => import("@/views/home.vue")
            }
        ]
    },
    {
        path: '/hover',
        component: () => import("@/views/hover.vue")
    },
    {
        path: '/animation',
        component: () => import("@/views/animation.vue")
    },
    {
        path: '/perspective',
        component: () => import("@/views/perspective.vue")
    },
    {
        path: '/reference',
        component: () => import("@/views/reference.vue")
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router