import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "../layouts/UserLayout.vue";
import About from "../pages/About.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import Home from "../pages/Home.vue";
import Governance from "../pages/Governance.vue";
import Services from "../pages/Services.vue";
import Certivicate from "../pages/Certivicate.vue";
import Partner from "../pages/Partner.vue";
import Project from "../pages/Project.vue";
import ServicesDetail from "../pages/ServicesDetail.vue";
import Contact from "../pages/Contact.vue";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path:'/',
        component: UserLayout,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'about',
                component: About,
            },
            {
                path: 'tata-kelola',
                component: Governance,
            },
            {
                path: 'sertifikat',
                component: Certivicate,
            },
            {
                path: 'partner',
                component: Partner,
            },
            {
                path: 'layanan',
                component: Services,
            },
            {
                path: 'layanan/:id',
                component: ServicesDetail,
            },
            {
                path: 'proyek',
                component: Project,
            },
            {
                path: 'kontak',
                component: Contact,
            },
            
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router