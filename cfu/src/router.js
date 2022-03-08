import { createWebHistory, createRouter } from "vue-router";
import PostView from './components/PostView';
import HomeView from './components/HomeView'

const routes = [{
        path: "/posts",
        component: PostView,
    },
    {
        path: "/",
        component: HomeView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;