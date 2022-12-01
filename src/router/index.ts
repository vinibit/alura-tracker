import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'TarefasView',
        component: () => import('@/views/TarefasView.vue')
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: () => import("@/views/ProjetosView.vue")
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
});