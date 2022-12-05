import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'TarefasView',
        component: () => import('@/views/TarefasView.vue')
    },
    {
        path: '/projetos',
        component: () => import('@/views/ProjetosView.vue'),
        children: [{
            path: '',
            name: 'Projetos',
            component: () => import("@/views/Projetos/Lista.vue")
        },
        {
            path: 'novo',
            name: 'Novo Projeto',
            component: () => import("@/views/Projetos/Formulario.vue")
        },
        {
            path: ':id',
            name: 'Editar Projeto',
            component: () => import("@/views/Projetos/Formulario.vue"),
            props: true
        }]
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
});