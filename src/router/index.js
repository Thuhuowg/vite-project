import { createRouter, createWebHistory } from "vue-router";
import test from './test';
import homeClient from './home';
const routes = [...test,...homeClient]
const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router;