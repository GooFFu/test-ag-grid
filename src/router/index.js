import { createRouter, createWebHistory } from 'vue-router'
import AGrid from '@/components/AGrid.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AGrid,
        },
    ],
})

export default router
