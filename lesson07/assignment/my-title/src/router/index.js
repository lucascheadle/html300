import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/index.vue'
import Gallery from '@/components/gallery.vue'
import Services from '@/components/services.vue'
import Testimonials from '@/components/testimonials.vue'
import Contact from '@/components/contact.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/index',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
