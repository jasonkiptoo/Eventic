import { createRouter, createWebHistory } from 'vue-router'
import LoginModal from '../views/LoginPage.vue'
import CreateEventForm from '../views/CreateEventForm.vue'
// import HomeView from '../views/HomePage.vue'

const routes = [
  {
    path: "/login",
    name: "LogIn",
    component: LoginModal,
  },
  {
    path: "/create-event",
    name: "CreateEvent",
    component: CreateEventForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
