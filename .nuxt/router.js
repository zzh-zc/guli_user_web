import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0279bba = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _5118d3b5 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1675ad07 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _7303f3d8 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _1c16614b = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _a7830508 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _f11d9ec4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _c0279bba,
    name: "course"
  }, {
    path: "/login",
    component: _5118d3b5,
    name: "login"
  }, {
    path: "/register",
    component: _1675ad07,
    name: "register"
  }, {
    path: "/teacher",
    component: _7303f3d8,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _1c16614b,
    name: "course-id"
  }, {
    path: "/teacher/:id",
    component: _a7830508,
    name: "teacher-id"
  }, {
    path: "/",
    component: _f11d9ec4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
