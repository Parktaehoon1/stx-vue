import { createRouter, createWebHistory } from "vue-router";
// createWebHistory는 해쉬태그없이 바꾸게해주는거 
const router = createRouter ({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home', 
        component: ''
    }
  ]
});

export default router;