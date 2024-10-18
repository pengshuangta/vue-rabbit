// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

// 一级路由
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
// 二级路由
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path和component对应关系的位置
  routes: [
    {
      path : '/',
      component : Layout,
      children : [
        {
          // path 置空表示:当一级路由页渲染的时候,也会跟着渲染
          path : '',
          component : Home,
        },
        {
          // path 置空表示:当一级路由页渲染的时候,也会跟着渲染
          path : 'category/:id',
          component : Category,
        },
      ]
    },
    {
      path : '/Login',
      component : Login
    }
  ]
})

export default router
