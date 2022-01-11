import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/home.vue'
import Category from '@/views/category/category.vue'
import Cart from '@/views/cart/cart.vue'
import User from '@/views/user/uesr.vue'


const routes = [{
        path: '',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        meta: {
            name: '首页'
        }
    }, {
        path: '/category',
        component: Category,
        meta: {
            name: '分类'
        }

    }, {
        path: '/cart',
        component: Cart,
        meta: {
            name: '购物车'
        }

    }, {
        path: '/user',
        component: User,
        meta: {
            name: '我的'
        }

    },

]

const router = new VueRouter({
    routes
})

export default router