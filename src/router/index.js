import { createRouter, createWebHistory } from "vue-router";
import test from './test';
import homeClient from './home';
import admin from "./admin";
import rider_detail from "./rider";
const routes = [...test,...homeClient,...admin]
const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router;