import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../views/LoginForm.vue";
import HomeForm from "../views/HomeForm.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeForm
  }
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}