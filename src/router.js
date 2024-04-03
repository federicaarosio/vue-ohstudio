import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactPage from './pages/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: function (to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            console.log("moving to top of the page");
            window.scrollTo(0, 0);
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
    ],
});


export { router }