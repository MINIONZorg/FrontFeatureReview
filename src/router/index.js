import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/memo',
        name: 'Memo',
        component: () => import('@/pages/MemoPage.vue')
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});