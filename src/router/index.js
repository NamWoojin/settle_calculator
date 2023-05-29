import { createRouter, createWebHistory } from "vue-router";

import InputPage from "../views/InputPage"

const routes = [
    {path: '/', component : InputPage},
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }