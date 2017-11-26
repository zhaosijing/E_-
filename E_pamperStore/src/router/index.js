import Vue from 'vue'
import VueRouter from 'vue-router'

import homes from '../pages/homes/homes.vue'
import classifys from '../pages/classifys/classifys.vue'
import myPet from '../pages/myPet/myPet.vue'
import shoppingCarts from '../pages/shoppingCarts/shoppingCarts.vue'

import clothing_city from './../homepage/clothing_city/clothing_city.vue'
import dog_formulas from './../homepage/dog_formulas/dog_formulas.vue'
import health_care from './../homepage/health_care/health_care.vue'
import snack_toys from './../homepage/snack_toys/snack_toys.vue'
import daily from './../homepage/daily/daily.vue'
import features from  './../homepage/features/ features.vue'
import pages from  './../homepage/pages/pages.vue'

import classify from './../homepage/classify/classify.vue'
import brand from './../homepage/brand/brand.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homes'
    },
    {
      path: '/classifys',
      component: classifys,
      children:[
        {
          path: '',
          component: classify
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/homes',
      component: homes,
      children:[
        {
          path:'',
          component: pages,
        },
        {
          path:'clothing_city',
          component: clothing_city,
        },
        {
          path:'dog_formulas',
          component: dog_formulas,
        },
        {
          path:'health_care',
          component: health_care,
        },
        {
          path: 'snack_toys',
          component: snack_toys,
        },
        {
          path: 'daily',
          component: daily,
        },
        {
          path: 'features',
          component: features,
        }
      ]
    },
    {
      path: '/myPet',
      component: myPet
    },
    {
      path: '/shoppingCarts',
      component: shoppingCarts
    }
  ]
})
