import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import ContactoView from '../views/ContactoView.vue'
import SelectedProduct from '../views/SelectedProduct.vue'


const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path:'/selectedProduct/:id',
    name:'selectedProduct',
    component:SelectedProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
