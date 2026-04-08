"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var HomePage_vue_1 = require("../pages/HomePage.vue");
var AboutPage_vue_1 = require("../pages/AboutPage.vue");
var ContactPage_vue_1 = require("../pages/ContactPage.vue");
var routes = [
    { path: '/', component: HomePage_vue_1.default },
    { path: '/about', component: AboutPage_vue_1.default },
    { path: '/contact', component: ContactPage_vue_1.default }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
    scrollBehavior: function (to, from, savedPosition) {
        return { top: 0, behavior: 'smooth' };
    },
});
exports.default = router;
