import Vue from 'vue'


const moduleName = '/yueqi'
export const routerArray = [
  {
    path: moduleName + '/',
    name: 'home',
    // @ts-ignore
    component: () => import('./views/Index')
  },

]

