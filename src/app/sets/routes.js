import * as components from './components'

export default [
  {
    path: '/',
    component: components.SetsListView,
    name: 'setsListView'
  },
  {
    path: '/sets/create',
    component: components.CreateEditSet,
    name: 'createEditSet'
  },
  {
    path: '/sets/:setId/edit',
    component: components.CreateEditSet,
    name: 'editSet'
  }
]
