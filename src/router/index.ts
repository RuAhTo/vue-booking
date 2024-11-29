import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../view/HomePage.vue';
import BookingPage from '../view/BookingPage.vue';
import GalleryPage from '../view/GalleryPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/booking',
        name: 'Booking',
        component: BookingPage
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GalleryPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router