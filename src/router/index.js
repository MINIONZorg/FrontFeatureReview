import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('@/pages/CalendarPage.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('@/pages/SignupPage.vue')
    },
    {
        path: '/memo',
        name: 'Memo',
        component: () => import('@/pages/MemoPage.vue')
    },
    {
        path: '/backlog',
        name: 'Backlog',
        component: () => import('@/pages/BacklogPage.vue')
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/pages/ChatPage.vue')
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});