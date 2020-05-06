import Layout from '@/layout/layout'
import Home from '@/layout/home/home'
import How from '@/layout/moduls/how/how'
import HowIndex from '@/layout/moduls/how/index/index'
import Pricing from '@/layout/moduls/pricing/pricing'
import PricingIndex from '@/layout/moduls/pricing/index/index'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/home',
        meta: {
          title: '首页'
        },
        component: Home
      },
      {
        path: 'how',
        component: How,
        children: [
          {
            path: '/',
            meta: {
              title: 'how'
            },
            component: HowIndex
          }
        ]
      },
      {
        path: 'pricing',
        component: Pricing,
        children: [
          {
            path: '/',
            meta: {
              title: 'pricing'
            },
            component: PricingIndex
          }
        ]
      }
    ]
  }
]
