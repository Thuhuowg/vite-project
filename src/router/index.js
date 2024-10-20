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
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('jwtToken');
    const userRole = localStorage.getItem('userRole');

    // Kiểm tra nếu route yêu cầu xác thực
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            next({ path: '/admin-login' }); // Chuyển hướng về trang chủ nếu chưa đăng nhập
        } else if (to.meta.requiredRoles && !to.meta.requiredRoles.includes(Number(userRole))) {
            next({ path: '/admin-login' }); // Hoặc chuyển hướng về trang lỗi 403
        } else {
            next(); // Cho phép truy cập
        }
    } else {
        next(); // Cho phép truy cập vào các route không yêu cầu xác thực
    }
});
export default router;