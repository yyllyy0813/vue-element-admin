/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const eventsRouter = {
  path: '/events',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Events',
  meta: {
    title: '事件管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'eventlist',
      component: () => import('@/views/events/eventlist'),
      name: '事件列表',
      meta: { title: '事件列表', noCache: true }
    },
    {
      path: 'eventadd',
      component: () => import('@/views/events/eventadd'),
      name: '事件增加',
      meta: { title: '事件增加', noCache: true }
    },
    {
      path: 'eventupdate',
      component: () => import('@/views/events/components/eventupdate'),
      name: '事件更新',
      meta: { title: '事件更新', noCache: true },
      hidden: true
    },
    {
      path: 'eventchart',
      component: () => import('@/views/events/eventchart'),
      name: '事件波形',
      meta: { title: '事件波形', noCache: true }
    },
  ]
}

export default eventsRouter
