/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  path: '/users',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Users',
  meta: {
    title: '用户管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'userlist',
      component: () => import('@/views/users/userlist'),
      name: '用户列表',
      meta: { title: '用户列表', noCache: true }
    },
    {
      path: 'useradd',
      component: () => import('@/views/users/useradd'),
      name: '用户增加',
      meta: { title: '用户增加', noCache: true }
    },
    {
      path: 'rolelist',
      component: () => import('@/views/users/rolelist'),
      name: '角色管理',
      meta: { title: '角色管理', noCache: true }
    },
  ]
}

export default usersRouter
