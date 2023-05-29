import { createRouter, createWebHistory } from "vue-router"
import AppLayout from "@/layout/default.vue"
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import LoginVue from "@/views/LoginView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/app",
            component: AppLayout,
            children: [
                {
                    path: "/dashboard",
                    name: "dashboard",
                    component: HomeView
                },
                {
                    path: "/about",
                    name: "about",
                    component: AboutView
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: LoginVue
        }
    ]
})

export default router
