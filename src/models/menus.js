export const menuItems = [
  { id: 1, name: 'Dashboard', icon: 'home', path: '/' },
  { id: 2, name: 'Users', icon: 'users', path: '/users' },
  { id: 3, name: 'Posts', icon: 'docs', path: '/posts' },
  { id: 4, name: 'Settings', icon: 'settings', path: '/settings' }
];

export const dropdownItems = [
  { id: 5, parentId: 3, name: 'Catehories', icon: 'file', path: '/posts/category' },
  { id: 6, parentId: 3, name: 'Subcategories', icon: 'file', path: '/posts/subcategory' },
  { id: 7, parentId: 3, name: 'Posts', icon: 'file', path: '/posts/posts' }
];